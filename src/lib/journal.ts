import { useEffect, useState } from "react";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { engineeringJournal } from "@/config/site";
import type { JournalEntryData } from "@/types";
import { db, firebaseConfigured } from "./firebase";

function filterByExperience(items: JournalEntryData[], experienceId?: string) {
  return experienceId ? items.filter((entry) => entry.experienceId === experienceId) : items;
}

export function useJournalEntries(experienceId?: string) {
  const [entries, setEntries] = useState<JournalEntryData[]>(() =>
    filterByExperience(engineeringJournal, experienceId)
  );

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
        setEntries(filterByExperience(items, experienceId));
      },
      () => setEntries(filterByExperience(engineeringJournal, experienceId))
    );
  }, [experienceId]);

  return entries;
}
