# CribConnect

CribConnect is a mobile-first housing marketplace built for Georgian College international students in Barrie, ON. It replaces scam-prone, unstructured channels (Facebook Marketplace, Kijiji) with a student-focused search experience: browse admin-seeded listings, filter by distance to campus, and request contact with a landlord after getting verified as a real student.

This is a v1 pilot: no landlord accounts/dashboard, no in-app chat, and no monetization yet. See [PLAN.md](./PLAN.md) for the full build plan, confirmed product decisions, and progress tracking.

## Status

Greenfield build on top of the default Expo Router v57 starter. Most functionality described below is planned, not yet implemented — check off items in [PLAN.md](./PLAN.md) as they land.

## Planned feature set

- **Auth**: Clerk, Google OAuth only
- **Listings feed & map**: filter by price, distance to Georgian College Barrie campus, listing type, furnished, utilities included, bedrooms, move-in date, minimum lease length
- **Request-info flow**: students request contact with a landlord; landlord notified by transactional email
- **Student verification**: ID/enrollment doc upload, manual admin review, gates access to landlord contact info
- **Trust & safety**: report/flag button on listings
- **Admin screen**: listing CRUD, verification queue, leads log, reports queue (web-targeted, same Expo Router project)

## Tech stack

- [Expo](https://expo.dev) / Expo Router (file-based routing, API routes for the backend)
- [Clerk](https://clerk.com) for auth
- [Neon Postgres](https://neon.tech) via [Drizzle ORM](https://orm.drizzle.team)
- [Inngest](https://www.inngest.com) for background jobs (notification emails)
- [Resend](https://resend.com) for transactional email
- [ImageKit](https://imagekit.io) for private document/photo storage
- [Google Maps Platform](https://mapsplatform.google.com) for maps and geocoding
- [Sentry](https://sentry.io) for observability

> This project targets Expo SDK 57, which changed significantly from prior versions. Consult the [versioned v57 docs](https://docs.expo.dev/versions/v57.0.0/) rather than general Expo docs when working on this codebase.

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
   npx expo start
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

App code lives in [src/app](./src/app), using Expo Router's file-based routing.

### Environment variables

Provider API keys (Clerk, Neon, Inngest, ImageKit, Resend, Google Maps, Sentry) are configured via a local `.env` file, which is gitignored and not committed. Set one up per the provider docs above before running any feature that depends on them.

## Distribution

Pilot distribution is via TestFlight and/or Expo Go to the student group — no public app store submission yet.

## License

See [LICENSE](./LICENSE).
