"use client";

import { FormEvent, useEffect, useState } from "react";
import { addDoc, collection, deleteDoc, doc, updateDoc } from "firebase/firestore";
import { onAuthStateChanged, signInWithEmailAndPassword, signOut, type User } from "firebase/auth";
import { engineeringJournal, experience } from "@/config/site";
import type { JournalEntryData } from "@/types";
import { auth, db, firebaseConfigured } from "@/lib/firebase";
import { useJournalEntries } from "@/lib/journal";
import { cn } from "@/lib/utils";

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

const narrativeFields = ["context", "problem", "investigation", "solution", "impact", "learning"] as const;

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
          <input
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            type="email"
            autoComplete="username"
            placeholder="Admin email"
            required
            className="field"
          />
          <input
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            type="password"
            autoComplete="current-password"
            placeholder="Password"
            required
            className="field"
          />
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
        <select
          value={draft.experienceId}
          onChange={(event) => updateField("experienceId", event.target.value)}
          required
          className="field sm:col-span-2"
        >
          <option value="">Select the job this journal belongs to</option>
          {experience.map((entry) => (
            <option key={entry.id} value={entry.id}>
              {entry.role} — {entry.organization}
            </option>
          ))}
        </select>
        <input
          type="date"
          value={draft.date}
          onChange={(event) => updateField("date", event.target.value)}
          required
          className="field"
        />
        <input
          value={draft.category}
          onChange={(event) => updateField("category", event.target.value)}
          placeholder="Project or category"
          required
          className="field"
        />
        <input
          value={draft.title}
          onChange={(event) => updateField("title", event.target.value)}
          placeholder="Title"
          required
          className="field sm:col-span-2"
        />
        {narrativeFields.map((field) => (
          <textarea
            key={field}
            value={draft[field]}
            onChange={(event) => updateField(field, event.target.value)}
            placeholder={field[0].toUpperCase() + field.slice(1)}
            required
            className="field min-h-28"
          />
        ))}
        <input
          value={draft.technologies.join(", ")}
          onChange={(event) =>
            setDraft((current) => ({
              ...current,
              technologies: event.target.value.split(",").map((item) => item.trim()).filter(Boolean),
            }))
          }
          placeholder="Technologies, separated by commas"
          className="field sm:col-span-2"
        />
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

      <div className="mt-8 space-y-3">
        {entries.map((entry) => (
          <article
            key={entry.id}
            className="flex flex-wrap items-center justify-between gap-4 rounded-xl border border-border bg-surface/40 p-4"
          >
            <div>
              <p className="font-medium text-text">{entry.title}</p>
              <p className="text-sm text-muted">
                {entry.date} · {entry.category}
              </p>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => editEntry(entry)}
                className="rounded-full border border-primary/30 bg-primary/10 px-3 py-1.5 text-xs text-primary"
              >
                Edit
              </button>
              {!engineeringJournal.some((item) => item.id === entry.id) && (
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
        ))}
      </div>
    </div>
  );
}
