"use client";

import { FormEvent, useEffect, useMemo, useState } from "react";
import { addDoc, collection, deleteDoc, doc, updateDoc } from "firebase/firestore";
import { onAuthStateChanged, signInWithEmailAndPassword, signOut, type User } from "firebase/auth";
import { engineeringJournal, experience } from "@/config/site";
import type { JournalEntryData } from "@/types";
import { auth, db, firebaseConfigured } from "@/lib/firebase";
import { useJournalEntries } from "@/lib/journal";
import { cn, formatJournalDate } from "@/lib/utils";

type Draft = Omit<JournalEntryData, "id">;
type Status = { tone: "info" | "success" | "error"; text: string } | null;

const emptyEntry: Draft = {
  experienceId: "",
  date: "",
  title: "",
  category: "",
  context: "",
  problem: "",
  investigation: "",
  solution: "",
  impact: "",
  learning: "",
  technologies: [],
};

const narrativeFields = [
  { key: "context", label: "Context", hint: "Where this happened and what you were working on." },
  { key: "problem", label: "Problem", hint: "What went wrong or needed solving." },
  { key: "investigation", label: "Investigation", hint: "How you narrowed down the cause." },
  { key: "solution", label: "Solution", hint: "What you changed and why." },
  { key: "impact", label: "Impact", hint: "What improved as a result." },
  { key: "learning", label: "Learning", hint: "What you would carry into future work." },
] as const;

const jobLabels = new Map(experience.map((entry) => [entry.id, entry.organization]));

const statusStyles = {
  info: "text-muted",
  success: "text-secondary",
  error: "text-red-300",
};

function StatusMessage({ status }: { status: Status }) {
  if (!status) return null;
  return (
    <p role={status.tone === "error" ? "alert" : "status"} className={cn("text-sm", statusStyles[status.tone])}>
      {status.text}
    </p>
  );
}

function Field({
  label,
  htmlFor,
  hint,
  className,
  children,
}: {
  label: string;
  htmlFor: string;
  hint?: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={cn("flex flex-col gap-1.5", className)}>
      <label htmlFor={htmlFor} className="text-xs font-medium uppercase tracking-[0.15em] text-muted">
        {label}
      </label>
      {children}
      {hint && <p className="text-xs text-muted/80">{hint}</p>}
    </div>
  );
}

export default function AdminPage() {
  const entries = useJournalEntries();
  const [user, setUser] = useState<User | null>(null);
  const [authReady, setAuthReady] = useState(!auth);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [draft, setDraft] = useState(emptyEntry);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [status, setStatus] = useState<Status>(null);
  const [pending, setPending] = useState(false);
  const [search, setSearch] = useState("");
  const [jobFilter, setJobFilter] = useState("");

  const visibleEntries = useMemo(() => {
    const term = search.trim().toLowerCase();
    return entries
      .filter((entry) => !jobFilter || entry.experienceId === jobFilter)
      .filter(
        (entry) =>
          !term ||
          [entry.title, entry.category, ...(entry.technologies ?? [])].some((value) => value.toLowerCase().includes(term))
      )
      .sort((a, b) => b.date.localeCompare(a.date));
  }, [entries, search, jobFilter]);

  useEffect(() => {
    if (!auth) return;
    return onAuthStateChanged(auth, (nextUser) => {
      setUser(nextUser);
      setAuthReady(true);
    });
  }, []);

  const updateField = (field: keyof Draft, value: string) => {
    setDraft((current) => ({ ...current, [field]: value }));
  };

  const login = async (event: FormEvent) => {
    event.preventDefault();
    if (!auth) return setStatus({ tone: "error", text: "Firebase is not configured yet." });
    setPending(true);
    setStatus(null);
    try {
      await signInWithEmailAndPassword(auth, email, password);
      setPassword("");
    } catch {
      setStatus({ tone: "error", text: "Unable to sign in. Check the admin credentials." });
    } finally {
      setPending(false);
    }
  };

  const resetDraft = () => {
    setDraft(emptyEntry);
    setEditingId(null);
  };

  const editEntry = ({ id, ...entry }: JournalEntryData) => {
    setEditingId(id);
    setDraft({ ...entry, experienceId: entry.experienceId ?? "infotech", technologies: entry.technologies ?? [] });
    setStatus(null);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const saveEntry = async (event: FormEvent) => {
    event.preventDefault();
    if (!db || !user) return;
    setPending(true);
    setStatus({ tone: "info", text: "Saving..." });
    try {
      if (editingId) await updateDoc(doc(db, "engineeringJournal", editingId), draft);
      else await addDoc(collection(db, "engineeringJournal"), draft);
      resetDraft();
      setStatus({ tone: "success", text: editingId ? "Journal entry updated." : "Journal entry added." });
    } catch {
      setStatus({ tone: "error", text: "Could not save this entry. Check Firebase rules and configuration." });
    } finally {
      setPending(false);
    }
  };

  const removeEntry = async (id: string) => {
    if (!db || !user || !window.confirm("Delete this journal entry?")) return;
    setPending(true);
    try {
      await deleteDoc(doc(db, "engineeringJournal", id));
      if (editingId === id) resetDraft();
      setStatus({ tone: "success", text: "Journal entry deleted." });
    } catch {
      setStatus({ tone: "error", text: "Could not delete this entry." });
    } finally {
      setPending(false);
    }
  };

  if (!firebaseConfigured) {
    return (
      <div className="mx-auto max-w-3xl px-6 py-32 text-text">
        <h1 className="font-display text-4xl">Admin setup required</h1>
        <p className="mt-4 text-muted">
          Add the Firebase variables from `.env.example`, enable Email/Password Authentication, and deploy the
          Firestore rules.
        </p>
      </div>
    );
  }

  if (!authReady) {
    return (
      <div className="mx-auto max-w-md px-6 py-32" role="status">
        <p className="font-mono text-xs tracking-[0.25em] text-primary/70">ADMIN</p>
        <p className="mt-3 text-muted">Checking your session...</p>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="mx-auto max-w-md px-6 py-32">
        <h1 className="font-display text-4xl text-text">Admin login</h1>
        <p className="mt-3 text-muted">Manage engineering journal content.</p>
        <form onSubmit={login} className="mt-8 space-y-4 rounded-2xl border border-border bg-surface/60 p-6">
          <Field label="Email" htmlFor="admin-email">
            <input
              id="admin-email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              type="email"
              autoComplete="username"
              required
              className="field"
            />
          </Field>
          <Field label="Password" htmlFor="admin-password">
            <input
              id="admin-password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              type="password"
              autoComplete="current-password"
              required
              className="field"
            />
          </Field>
          <button
            disabled={pending}
            className="w-full rounded-full bg-primary px-4 py-2 font-medium text-background disabled:cursor-wait disabled:opacity-60"
          >
            {pending ? "Signing in..." : "Sign in"}
          </button>
          <StatusMessage status={status} />
        </form>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-6xl px-6 py-28 sm:px-8">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="font-mono text-xs tracking-[0.25em] text-primary/70">ADMIN</p>
          <h1 className="mt-3 font-display text-4xl text-text">Engineering Journal</h1>
          <p className="mt-2 text-sm text-muted">Signed in as {user.email}</p>
        </div>
        <button
          onClick={() => auth && signOut(auth)}
          className="rounded-full border border-border px-4 py-2 text-sm text-muted hover:border-primary hover:text-primary"
        >
          Sign out
        </button>
      </div>

      <form onSubmit={saveEntry} className="mt-8 grid gap-4 rounded-2xl border border-border bg-surface/60 p-6 sm:grid-cols-2">
        <Field label="Job" htmlFor="entry-job" className="sm:col-span-2">
          <select
            id="entry-job"
            value={draft.experienceId}
            onChange={(event) => updateField("experienceId", event.target.value)}
            required
            className="field"
          >
            <option value="">Select the job this journal belongs to</option>
            {experience.map((entry) => (
              <option key={entry.id} value={entry.id}>
                {entry.role} — {entry.organization}
              </option>
            ))}
          </select>
        </Field>
        <Field label="Date" htmlFor="entry-date">
          <input
            id="entry-date"
            type="date"
            value={draft.date}
            onChange={(event) => updateField("date", event.target.value)}
            required
            className="field"
          />
        </Field>
        <Field label="Project or category" htmlFor="entry-category">
          <input
            id="entry-category"
            value={draft.category}
            onChange={(event) => updateField("category", event.target.value)}
            placeholder="e.g. Client onboarding"
            required
            className="field"
          />
        </Field>
        <Field label="Title" htmlFor="entry-title" className="sm:col-span-2">
          <input
            id="entry-title"
            value={draft.title}
            onChange={(event) => updateField("title", event.target.value)}
            placeholder="A short summary of the work"
            required
            className="field"
          />
        </Field>
        {narrativeFields.map(({ key, label, hint }) => (
          <Field key={key} label={label} htmlFor={`entry-${key}`} hint={hint}>
            <textarea
              id={`entry-${key}`}
              value={draft[key]}
              onChange={(event) => updateField(key, event.target.value)}
              required
              className="field min-h-28"
            />
          </Field>
        ))}
        <Field label="Technologies" htmlFor="entry-technologies" hint="Separate with commas." className="sm:col-span-2">
          <input
            id="entry-technologies"
            value={draft.technologies.join(", ")}
            onChange={(event) =>
              setDraft((current) => ({
                ...current,
                technologies: event.target.value.split(",").map((item) => item.trim()).filter(Boolean),
              }))
            }
            placeholder="Java, Spring Boot, SQL"
            className="field"
          />
        </Field>
        <div className="flex flex-wrap items-center gap-3 sm:col-span-2">
          <button
            disabled={pending}
            className="rounded-full bg-primary px-5 py-2 font-medium text-background disabled:cursor-wait disabled:opacity-60"
          >
            {editingId ? "Update entry" : "Add entry"}
          </button>
          {editingId && (
            <button type="button" onClick={resetDraft} className="rounded-full border border-border px-5 py-2 text-sm text-muted">
              Cancel
            </button>
          )}
          <StatusMessage status={status} />
        </div>
      </form>

      <section aria-labelledby="entries-heading" className="mt-10">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2 id="entries-heading" className="font-display text-2xl text-text">
              Entries
            </h2>
            <p className="mt-1 text-sm text-muted">
              Showing {visibleEntries.length} of {entries.length}
            </p>
          </div>
          <div className="flex w-full flex-wrap gap-3 sm:w-auto">
            <input
              type="search"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Search title, category or technology"
              aria-label="Search entries"
              className="field sm:w-72"
            />
            <select
              value={jobFilter}
              onChange={(event) => setJobFilter(event.target.value)}
              aria-label="Filter by job"
              className="field sm:w-48"
            >
              <option value="">All jobs</option>
              {experience.map((entry) => (
                <option key={entry.id} value={entry.id}>
                  {entry.organization}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="mt-4 space-y-3">
          {visibleEntries.length === 0 && (
            <p className="rounded-xl border border-dashed border-border p-6 text-center text-sm text-muted">
              No entries match these filters.
            </p>
          )}
          {visibleEntries.map((entry) => {
            const isSeed = engineeringJournal.some((item) => item.id === entry.id);
            return (
              <article
                key={entry.id}
                className={cn(
                  "flex flex-wrap items-center justify-between gap-4 rounded-xl border bg-surface/40 p-4",
                  editingId === entry.id ? "border-primary/60" : "border-border"
                )}
              >
                <div className="min-w-0">
                  <p className="font-medium text-text">{entry.title}</p>
                  <p className="text-sm text-muted">
                    {formatJournalDate(entry.date)} · {entry.category} · {jobLabels.get(entry.experienceId) ?? "Unassigned"}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  {isSeed && (
                    <span className="rounded-full border border-border px-2.5 py-1 text-[10px] uppercase tracking-[0.15em] text-muted">
                      Seed
                    </span>
                  )}
                  <button
                    onClick={() => editEntry(entry)}
                    className="rounded-full border border-primary/30 bg-primary/10 px-3 py-1.5 text-xs text-primary"
                  >
                    Edit
                  </button>
                  {!isSeed && (
                    <button
                      onClick={() => removeEntry(entry.id)}
                      disabled={pending}
                      className="rounded-full border border-red-400/30 bg-red-400/10 px-3 py-1.5 text-xs text-red-300 disabled:opacity-60"
                    >
                      Delete
                    </button>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </div>
  );
}
