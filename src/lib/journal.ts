import { useEffect, useState } from "react";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { engineeringJournal } from "@/config/site";
import type { JournalEntryData } from "@/types";
import { db, firebaseConfigured } from "./firebase";

export function useJournalEntries(experienceId?: string) {
  const filterEntries = (items: JournalEntryData[]) =>
    experienceId ? items.filter((entry) => entry.experienceId === experienceId) : items;
  const [entries, setEntries] = useState<JournalEntryData[]>(filterEntries(engineeringJournal));

  useEffect(() => {
    if (!firebaseConfigured || !db) return;

    const journalQuery = query(collection(db, "engineeringJournal"), orderBy("date", "desc"));
    return onSnapshot(
      journalQuery,
      (snapshot) => {
        const items = snapshot.docs.map((item) => ({
          id: item.id,
          experienceId: "infotech",
          ...item.data(),
        }) as JournalEntryData);
        setEntries(filterEntries(items));
      },
      () => setEntries(filterEntries(engineeringJournal))
    );
  }, [experienceId]);

  return entries;
}
