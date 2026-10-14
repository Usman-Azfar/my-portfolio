# Project Memory

Running log of context, decisions, and open items for the Usman Azfar portfolio site. This is
project-local documentation (not an AI assistant memory store) — update it as work progresses so
anyone (human or AI) picking this up later has the "why," not just the "what."

## Origin

The project started from a detailed brief (see [`proposal.txt`](../proposal.txt) in the parent
directory) specifying a premium, dark, "AI research lab + engineering portfolio + cinematic 3D
interface" site aimed at scholarship committees, grad admissions, researchers, and employers —
explicitly *not* a generic dev portfolio. Key constraints from that brief:

- No fake stats, testimonials, or publications — everything shown must be real.
- MVP was scoped to be static/no-backend, but architected so a backend (Supabase was the
  original suggestion) could be added later without a frontend rewrite.
- `src/config/site.ts` was mandated as the single source of truth for all content and theming.

## What exists today

- **Next.js 16 / React 19 / TypeScript** app in `usman-portfolio/`, styled with Tailwind CSS 4.
- All page sections (Hero, About, Education, TechStack, Experience, Research, Projects,
  Leadership/Impact, Achievements) render from `src/config/site.ts`, typed via
  `src/types/index.ts`. This is intentional — see comment at top of `types/index.ts`: keeping
  types separate from content lets a future CMS/DB integration type-check against the same
  shapes without touching UI code.
- Instead of Supabase, **Firebase** (Auth + Firestore) was adopted, but scoped narrowly: only
  the "Engineering Journal" section (daily dev-log entries under the InfoTech experience) is
  dynamic. `useJournalEntries` (`src/lib/journal.ts`) reads Firestore live and falls back to the
  seeded `engineeringJournal` array in `site.ts` if Firebase isn't configured or errors out —
  so the public site never hard-depends on Firebase being up.
- `/admin` is a single-user editor (email/password) for journal entries, gated by
  `firestore.rules` matching one hardcoded Firebase Auth UID. `.env.local` already has a live
  Firebase project's config (`portfolio-b6ce0`) — gitignored, not committed.
- `public/documents/` holds real source-of-truth documents: CV, transcripts (BS result card,
  FSc/Matric certificates), and competition/scholarship evidence (NSCT, ISSB, COMSATS, Wushu),
  referenced directly from `education` and `achievements` entries in `site.ts`.

## Known gaps (as of 2026-08-25)

- **Broken link:** `education` entry `"elementary"` points `resultUrl` at
  `/documents/Saudia_modified.pdf`, which does not exist in `public/documents/`. Either add the
  file or remove the link.
- **Placeholder journal content:** all four seeded `engineeringJournal` entries
  (2026-08-18 → 2026-08-21) have real titles/categories/dates but `context`/`problem`/
  `investigation`/`solution`/`impact`/`learning` are still `"[ADD CONTENT]"`. Intended to be
  filled in via `/admin` as real daily notes are recorded, not hand-edited in `site.ts`.
- **Missing LinkedIn:** `social.linkedin` is `undefined` in `site.ts`, flagged inline as
  `[ADD CONTENT]`.
- **Placeholder domain:** `siteUrl` is hardcoded to `https://usmanazfar.com` in
  `src/app/layout.tsx`, `src/app/sitemap.ts`, and `src/app/robots.ts` — all three flagged
  `[ADD CONTENT]`, need updating once a real production domain is live on Vercel.
- **No media yet:** `images`/`videos` arrays are empty for the `research.featured` (HelmX) entry
  and for every `projects` entry in `site.ts`.
- **Stray sibling files:** the parent directory (`d:\PORTFOLIO\`, one level above
  `usman-portfolio/`) contains a second, unrelated `package.json`/`package-lock.json` (no name,
  no scripts, partial dependency list) plus loose copies of the CV/certificates that also live
  in `public/documents/`. These appear to be leftovers from an earlier scaffold, not part of the
  active app — the real project root is `usman-portfolio/`. Not cleaned up; flagging so it isn't
  mistaken for a second live app.
- Neither `d:\PORTFOLIO\` nor `usman-portfolio/` is currently a git repository — no version
  history exists yet.

## Decisions worth remembering

- Firebase over Supabase: deviates from the original proposal's suggestion, scoped deliberately
  narrow (journal only) so the rest of the site stays a static, dependency-free build.
- Single-admin-UID rule in `firestore.rules` rather than a role/claims system — appropriate for
  a single-owner portfolio, would need revisiting if multi-user editing is ever needed.
- Content vs. types split (`config/site.ts` vs `types/index.ts`) is deliberate, per the comment
  in `types/index.ts` — preserve this separation when extending the content model.
