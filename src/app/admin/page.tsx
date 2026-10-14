"use client";

import { FormEvent, useEffect, useState } from "react";
import { addDoc, collection, deleteDoc, doc, updateDoc } from "firebase/firestore";
import { onAuthStateChanged, signInWithEmailAndPassword, signOut, type User } from "firebase/auth";
import { engineeringJournal } from "@/config/site";
import { experience } from "@/config/site";
import type { JournalEntryData } from "@/types";
import { auth, db, firebaseConfigured } from "@/lib/firebase";
import { useJournalEntries } from "@/lib/journal";

const emptyEntry: Omit<JournalEntryData, "id"> = {
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

export default function AdminPage() {
  const entries = useJournalEntries();
  const [user, setUser] = useState<User | null>(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [draft, setDraft] = useState(emptyEntry);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (!auth) return;
    return onAuthStateChanged(auth, setUser);
  }, []);

  const updateField = (field: keyof typeof emptyEntry, value: string) => {
    setDraft((current) => ({ ...current, [field]: value }));
  };

  const login = async (event: FormEvent) => {
    event.preventDefault();
    if (!auth) return setMessage("Firebase is not configured yet.");
    try {
      await signInWithEmailAndPassword(auth, email, password);
      setMessage("");
    } catch {
      setMessage("Unable to sign in. Check the admin credentials.");
    }
  };

  const editEntry = (entry: JournalEntryData) => {
    setEditingId(entry.id);
    setDraft({ ...entry, experienceId: entry.experienceId ?? "infotech", technologies: entry.technologies ?? [] });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const saveEntry = async (event: FormEvent) => {
    event.preventDefault();
    if (!db || !user) return;
    setMessage("Saving...");
    try {
      const payload = {
        ...draft,
        technologies: draft.technologies,
      };
      if (editingId) await updateDoc(doc(db, "engineeringJournal", editingId), payload);
      else await addDoc(collection(db, "engineeringJournal"), payload);
      setDraft(emptyEntry);
      setEditingId(null);
      setMessage("Journal entry saved.");
    } catch {
      setMessage("Could not save this entry. Check Firebase rules and configuration.");
    }
  };

  const removeEntry = async (id: string) => {
    if (!db || !user || !window.confirm("Delete this journal entry?")) return;
    try {
      await deleteDoc(doc(db, "engineeringJournal", id));
      setMessage("Journal entry deleted.");
    } catch {
      setMessage("Could not delete this entry.");
    }
  };

  if (!firebaseConfigured) {
    return <main className="mx-auto max-w-3xl px-6 py-32 text-text"><h1 className="font-display text-4xl">Admin setup required</h1><p className="mt-4 text-muted">Add the Firebase variables from `.env.example`, enable Email/Password Authentication, and deploy the Firestore rules.</p></main>;
  }

  if (!user) {
    return (
      <main className="mx-auto max-w-md px-6 py-32">
        <h1 className="font-display text-4xl text-text">Admin login</h1>
        <p className="mt-3 text-muted">Manage engineering journal content.</p>
        <form onSubmit={login} className="mt-8 space-y-4 rounded-2xl border border-border bg-surface/60 p-6">
          <input value={email} onChange={(event) => setEmail(event.target.value)} type="email" placeholder="Admin email" required className="w-full rounded-lg border border-border bg-background px-3 py-2 text-text outline-none focus:border-primary" />
          <input value={password} onChange={(event) => setPassword(event.target.value)} type="password" placeholder="Password" required className="w-full rounded-lg border border-border bg-background px-3 py-2 text-text outline-none focus:border-primary" />
          <button className="w-full rounded-full bg-primary px-4 py-2 font-medium text-background">Sign in</button>
          {message && <p className="text-sm text-secondary">{message}</p>}
        </form>
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-6xl px-6 py-28 sm:px-8">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div><p className="font-mono text-xs tracking-[0.25em] text-primary/70">ADMIN</p><h1 className="mt-3 font-display text-4xl text-text">Engineering Journal</h1></div>
        <button onClick={() => auth && signOut(auth)} className="rounded-full border border-border px-4 py-2 text-sm text-muted hover:border-primary hover:text-primary">Sign out</button>
      </div>
      <form onSubmit={saveEntry} className="mt-8 grid gap-4 rounded-2xl border border-border bg-surface/60 p-6 sm:grid-cols-2">
        <select value={draft.experienceId} onChange={(event) => updateField("experienceId", event.target.value)} required className="field sm:col-span-2">
          <option value="">Select the job this journal belongs to</option>
          {experience.map((entry) => <option key={entry.id} value={entry.id}>{entry.role} — {entry.organization}</option>)}
        </select>
        <input type="date" value={draft.date} onChange={(event) => updateField("date", event.target.value)} required className="field" />
        <input value={draft.category} onChange={(event) => updateField("category", event.target.value)} placeholder="Project or category" required className="field" />
        <input value={draft.title} onChange={(event) => updateField("title", event.target.value)} placeholder="Title" required className="field sm:col-span-2" />
        {(["context", "problem", "investigation", "solution", "impact", "learning"] as const).map((field) => <textarea key={field} value={draft[field]} onChange={(event) => updateField(field, event.target.value)} placeholder={field[0].toUpperCase() + field.slice(1)} required className="field min-h-28" />)}
        <input value={draft.technologies.join(", ")} onChange={(event) => setDraft((current) => ({ ...current, technologies: event.target.value.split(",").map((item) => item.trim()).filter(Boolean) }))} placeholder="Technologies, separated by commas" className="field sm:col-span-2" />
        <div className="flex items-center gap-3 sm:col-span-2"><button className="rounded-full bg-primary px-5 py-2 font-medium text-background">{editingId ? "Update entry" : "Add entry"}</button>{editingId && <button type="button" onClick={() => { setEditingId(null); setDraft(emptyEntry); }} className="rounded-full border border-border px-5 py-2 text-sm text-muted">Cancel</button>}<span className="text-sm text-secondary">{message}</span></div>
      </form>
      <div className="mt-8 space-y-3">{entries.map((entry) => <article key={entry.id} className="flex flex-wrap items-center justify-between gap-4 rounded-xl border border-border bg-surface/40 p-4"><div><p className="font-medium text-text">{entry.title}</p><p className="text-sm text-muted">{entry.date} · {entry.category}</p></div><div className="flex gap-2"><button onClick={() => editEntry(entry)} className="rounded-full border border-primary/30 bg-primary/10 px-3 py-1.5 text-xs text-primary">Edit</button>{!engineeringJournal.some((item) => item.id === entry.id) && <button onClick={() => removeEntry(entry.id)} className="rounded-full border border-red-400/30 bg-red-400/10 px-3 py-1.5 text-xs text-red-300">Delete</button>}</div></article>)}</div>
    </main>
  );
}
