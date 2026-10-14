"use client";

import { useMemo, useState } from "react";
import type { JournalEntryData } from "@/types";
import { JournalEntry } from "./JournalEntry";

function groupEntries(entries: JournalEntryData[]) {
  const sorted = [...entries].sort((a, b) => (a.date < b.date ? 1 : -1));
  const groups = new Map<string, Map<string, JournalEntryData[]>>();

  for (const entry of sorted) {
    const date = new Date(entry.date + "T00:00:00");
    const year = date.getFullYear().toString();
    const month = date.toLocaleDateString("en-US", { month: "long" }).toUpperCase();

    if (!groups.has(year)) groups.set(year, new Map());
    const yearGroup = groups.get(year)!;
    if (!yearGroup.has(month)) yearGroup.set(month, []);
    yearGroup.get(month)!.push(entry);
  }

  return groups;
}

export function JournalTimeline({ entries }: { entries: JournalEntryData[] }) {
  const [openIds, setOpenIds] = useState<Set<string>>(new Set());
  const [selectedYear, setSelectedYear] = useState(() => {
    if (entries.length === 0) return "all";
    const years = [...new Set(entries.map((entry) => new Date(entry.date + "T00:00:00").getFullYear().toString()))].sort((a, b) => Number(b) - Number(a));
    return years[0];
  });
  const [selectedMonth, setSelectedMonth] = useState(() => {
    if (entries.length === 0) return "all";
    const dates = [...entries].map((entry) => new Date(entry.date + "T00:00:00"));
    const latest = dates.sort((a, b) => b.getTime() - a.getTime())[0];
    return (latest.getMonth() + 1).toString().padStart(2, "0");
  });
  const [selectedDate, setSelectedDate] = useState("all");

  const years = useMemo(
    () => [...new Set(entries.map((entry) => new Date(entry.date + "T00:00:00").getFullYear().toString()))].sort((a, b) => Number(b) - Number(a)),
    [entries]
  );

  const availableMonths = useMemo(() => {
    const monthSet = new Set<string>();
    for (const entry of entries) {
      if (selectedYear === "all" || new Date(entry.date + "T00:00:00").getFullYear().toString() === selectedYear) {
        const month = (new Date(entry.date + "T00:00:00").getMonth() + 1).toString().padStart(2, "0");
        monthSet.add(month);
      }
    }
    return [...monthSet].sort((a, b) => Number(a) - Number(b));
  }, [entries, selectedYear]);

  const availableDates = useMemo(() => {
    const monthDateSet = new Set<string>();
    for (const entry of entries) {
      const date = new Date(entry.date + "T00:00:00");
      if (
        (selectedYear === "all" || date.getFullYear().toString() === selectedYear) &&
        (selectedMonth === "all" || (date.getMonth() + 1).toString().padStart(2, "0") === selectedMonth)
      ) {
        monthDateSet.add(entry.date);
      }
    }
    return [...monthDateSet].sort((a, b) => (a < b ? 1 : -1));
  }, [entries, selectedMonth, selectedYear]);

  const filteredEntries = useMemo(() => {
    return entries.filter((entry) => {
      const date = new Date(entry.date + "T00:00:00");
      const yearMatch = selectedYear === "all" || date.getFullYear().toString() === selectedYear;
      const monthMatch = selectedMonth === "all" || (date.getMonth() + 1).toString().padStart(2, "0") === selectedMonth;
      const dateMatch = selectedDate === "all" || entry.date === selectedDate;
      return yearMatch && monthMatch && dateMatch;
    });
  }, [entries, selectedDate, selectedMonth, selectedYear]);

  const grouped = useMemo(() => groupEntries(filteredEntries), [filteredEntries]);

  const toggle = (id: string) => {
    setOpenIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  if (entries.length === 0) return null;

  return (
    <div className="rounded-2xl border border-border bg-surface/60 p-6 sm:p-8">
      <div className="mb-6 grid w-full grid-cols-1 gap-3 sm:grid-cols-3">
        <label className="flex flex-col gap-1 text-xs uppercase tracking-[0.2em] text-muted-dim">
          Year
          <select
            value={selectedYear}
            onChange={(e) => {
              setSelectedYear(e.target.value);
              setSelectedMonth("all");
              setSelectedDate("all");
            }}
            className="w-full rounded-lg border border-border bg-surfaceSecondary px-3 py-2 text-sm text-text outline-none focus:border-primary"
          >
            <option value="all">All years</option>
            {years.map((year) => (
              <option key={year} value={year}>{year}</option>
            ))}
          </select>
        </label>

        <label className="flex flex-col gap-1 text-xs uppercase tracking-[0.2em] text-muted-dim">
          Month
          <select
            value={selectedMonth}
            onChange={(e) => {
              setSelectedMonth(e.target.value);
              setSelectedDate("all");
            }}
            className="w-full rounded-lg border border-border bg-surfaceSecondary px-3 py-2 text-sm text-text outline-none focus:border-primary"
          >
            <option value="all">All months</option>
            {availableMonths.map((month) => (
              <option key={month} value={month}>
                {new Date(`${selectedYear || years[0]}-${month}-01T00:00:00`).toLocaleDateString("en-US", { month: "long" })}
              </option>
            ))}
          </select>
        </label>

        <label className="flex flex-col gap-1 text-xs uppercase tracking-[0.2em] text-muted-dim">
          Date
          <select
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
            className="w-full rounded-lg border border-border bg-surfaceSecondary px-3 py-2 text-sm text-text outline-none focus:border-primary"
          >
            <option value="all">All dates</option>
            {availableDates.map((date) => (
              <option key={date} value={date}>
                {new Date(date + "T00:00:00").toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
              </option>
            ))}
          </select>
        </label>
      </div>

      {filteredEntries.length === 0 ? (
        <p className="text-sm text-muted">No journal entries match the selected period.</p>
      ) : null}

      {Array.from(grouped.entries()).map(([year, months]) => (
        <div key={year} className="mb-8 last:mb-0">
          <p className="text-center font-display text-2xl font-medium text-muted">{year}</p>
          {Array.from(months.entries()).map(([month, monthEntries]) => (
            <div key={month} className="mt-4">
              <p className="text-center font-mono text-xs tracking-[0.25em] text-muted-dim">{month}</p>
              <div className="mt-2">
                {monthEntries.map((entry) => (
                  <JournalEntry
                    key={entry.id}
                    entry={entry}
                    isOpen={openIds.has(entry.id)}
                    onToggle={() => toggle(entry.id)}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
