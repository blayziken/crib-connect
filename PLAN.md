# CribConnect — Implementation Plan

## Context

CribConnect is a new mobile-first housing marketplace for Georgian College international students in Barrie, ON, built to replace scam-prone, unstructured channels (Facebook Marketplace, Kijiji) with a student-focused, proximity-to-campus search experience. This plan comes out of a full product/architecture interview (see conversation) and covers a v1 pilot: students browse and search admin-seeded listings, request contact via a landlord-notification flow, and get manually verified as real students — all distributed informally via TestFlight/Expo Go, with no landlord dashboard, no in-app chat, and no monetization yet.

The repo (`cribConnect`) currently contains only the default Expo Router v57 starter (`src/app/index.tsx`, `_layout.tsx`), so this is a greenfield build on top of that scaffold.

Progress is tracked by checking off items in each phase below as they're built.

## Confirmed decisions (from interview)

- **Auth**: Clerk, Google OAuth only, no email/password, signup stays open (no domain gate)
- **Listings**: admin-seeded only in v1 (no landlord accounts/dashboard — deferred to v2)
- **Contact flow**: "Request info" form → landlord notified by direct transactional email (Resend) via an Inngest job; also logged as a lead in the admin screen
- **Verification**: student uploads ID/enrollment doc → private ImageKit storage → manual admin review → approve/reject → student notified by email (Resend/Inngest) → doc auto-deleted after review decision
- **Trust/safety**: report/flag button on listings; contact info + request-info form gated behind verification
- **Proximity**: fixed distance from Georgian College Barrie campus (single reference point), not device GPS — no location permission needed
- **Map/geocoding**: Google Maps Platform
- **Listing model**: type = entire unit / private room / shared room; fields include price, bedrooms/capacity, furnished, utilities included, move-in date, minimum lease length, photos, landlord contact
- **Backend**: Expo Router API Routes (`+api.ts` files) in the same project — **requires `app.json` → `web.output: "server"`** (current value is `"static"`, must change), deployed via EAS Hosting or a compatible provider (confirmed via Expo v57 docs)
- **Admin**: no separate dashboard app in v1 — a lightweight admin-role-gated screen (web-targeted, in the same Expo Router project) for listing CRUD + verification queue + leads log
- **DB**: Neon Postgres via Drizzle ORM
- **Background jobs**: Inngest, scoped to notification emails only (landlord lead alert, student verification-status email)
- **Observability**: Sentry across mobile app and API routes
- **Onboarding**: 1–3 informational carousel screens after first sign-in, then straight to the listings feed
- **Distribution**: pilot via TestFlight/Expo Go, no public store submission yet
- **Monetization**: none in v1

## Assumptions (flagged, no firm answer given)

- Single campus reference point (Georgian College Barrie only)
- No offline mode, no optimistic updates — standard fetch/loading/error states
- No automated test suite required for v1; TypeScript strict mode + manual QA is the bar
- Dev + prod environments only, no separate staging
- Google Maps usage assumed to stay within free/low-cost tier during pilot; no budget alerting built
- Verification-approved students get full, non-tiered access to contact info

## Open risks

- New provider (Resend or similar) needed for transactional email — not in original stack, needs its own account/API key
- Briefly holding ID-adjacent documents is a PII/privacy consideration (PIPEDA) — in-app privacy notice recommended
- Cold-start inventory: v1 has zero value until real listings are manually seeded near campus
- "Georgian College" name/branding use may need an unaffiliated/unofficial disclaimer
- Using Expo's web output for the admin screen is untested for admin-tool UX — validate early, be ready to fall back to a minimal separate page if it's awkward

---

## Phase 0 — Foundational setup
- [ ] Create accounts/projects: Clerk, Neon, Inngest, ImageKit, Sentry, Google Cloud (Maps Platform + Geocoding API key), Resend
- [ ] Add `.env` / EAS secrets structure for all provider keys (documented in README, not committed)
- [ ] Change `app.json` → `"web": { "output": "server" }` (required for Expo Router API Routes per v57 docs)
- [ ] Install and configure: `drizzle-orm`, `drizzle-kit`, Neon serverless driver, `@clerk/clerk-expo`, `inngest`, `imagekit`/`imagekitio-react-native` (or REST calls), `@sentry/react-native`, Resend SDK
- [ ] Verify `expo-server` (SDK 54+) helpers are available for API route error handling

## Phase 1 — Data layer
- [ ] Define Drizzle schema: `users`, `listings`, `verification_requests`, `leads`, `reports`
- [ ] Set up Neon connection + Drizzle client usable from Expo API Routes
- [ ] Write and run initial migration
- [ ] Seed script for a handful of test listings near Georgian College Barrie campus

## Phase 2 — Auth
- [ ] Wire Clerk into the Expo Router app (`ClerkProvider`, Google-only sign-in screen)
- [ ] Handle Clerk → Neon user sync (webhook or on-first-request upsert) into `users` table with `role` (student/admin) and `verificationStatus`
- [ ] Auth-gated routing: signed-out → sign-in screen; signed-in → onboarding (first time) or feed

## Phase 3 — Onboarding & navigation shell
- [ ] Build 1–3 screen onboarding carousel explaining the app (shown once per user)
- [ ] Set up main navigation: listings feed, map, profile/verification, (admin tab if `role === admin`)

## Phase 4 — Listings feed & search
- [ ] API route: `GET /listings` with filters (price range, distance, listingType, furnished, utilitiesIncluded, bedrooms, moveInDate, minLeaseLength) and sort-by-distance-to-campus
- [ ] Compute/store `distanceToCampus` per listing (geocode address once via Google Geocoding API at creation time, not per-request)
- [ ] Feed screen: list view with filter UI
- [ ] Map screen: Google Maps view of listings with campus marker
- [ ] Empty state (no listings match filters) and loading/error states

## Phase 5 — Listing detail & request-info flow
- [ ] API route: `GET /listings/:id`
- [ ] Listing detail screen: photos (ImageKit), full details, landlord contact section
- [ ] Gate contact info + request-info form behind `verificationStatus === approved`
- [ ] API route: `POST /leads` (creates `Lead` record)
- [ ] Inngest function: on lead created → send landlord email via Resend with student's message/contact
- [ ] Confirmation UI after submission

## Phase 6 — Student verification
- [ ] Verification screen: upload ID/enrollment doc (camera/photo picker → ImageKit private folder)
- [ ] API route: `POST /verification-requests`
- [ ] Status display on profile (pending/approved/rejected)
- [ ] Inngest function: on status change → send email via Resend
- [ ] Auto-delete uploaded doc from ImageKit after admin decision, retain only decision + timestamp

## Phase 7 — Trust & safety
- [ ] Report/flag button on listing detail → `POST /reports`
- [ ] Reports visible in admin screen for review

## Phase 8 — Admin screen (web)
- [ ] Admin-role-gated routes (redirect non-admins)
- [ ] Listings CRUD UI (create/edit/deactivate)
- [ ] Verification queue: view pending doc, approve/reject
- [ ] Leads log: view submitted request-info leads
- [ ] Reports queue: view flagged listings

## Phase 9 — Observability
- [ ] Sentry initialized in Expo app (crash/error reporting)
- [ ] Sentry initialized in API routes (server-side errors)
- [ ] Basic breadcrumbs/tags for key flows (auth, lead submission, verification)

## Phase 10 — Build & distribution
- [ ] EAS Build configuration (dev + prod profiles)
- [ ] Deploy API routes/server bundle (EAS Hosting or confirmed alternative)
- [ ] Configure `origin` for native API requests to point at deployed server
- [ ] TestFlight (iOS) and/or Expo Go link distribution to pilot student group
- [ ] README updated with setup/run/deploy instructions

## Phase 11 — Pilot QA pass
- [ ] Manual end-to-end walkthrough: sign-in → onboarding → feed → filter → map → listing detail → request info → email received
- [ ] Manual end-to-end walkthrough: verification upload → admin approval → email received → contact info unlocked
- [ ] Manual end-to-end walkthrough: report a listing → appears in admin queue
- [ ] Edge cases: no listings match filters, network failure on feed load, image upload failure, duplicate lead submission

---

## Verification (how we'll know each phase works)

- **Data/Auth (0–2)**: run app locally, sign in with a Google test account, confirm a row appears in Neon `users` table via Drizzle Studio
- **Feed/Map (4)**: seed 5–10 test listings at varying distances, confirm sort order and filters return expected subsets
- **Request-info (5)**: submit a request as a verified test student, confirm landlord test-email inbox receives the Resend email and the lead appears in the admin screen
- **Verification (6)**: upload a test doc, approve it from the admin screen, confirm the student receives the email and gains contact-info access, and confirm the doc is deleted from ImageKit afterward
- **Distribution (10)**: install the pilot build via TestFlight/Expo Go on a real device and complete the full flow above outside of local dev
