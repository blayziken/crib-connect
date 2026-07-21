# Expo HAS CHANGED

Read the exact versioned docs at https://docs.expo.dev/versions/v57.0.0/ before writing any code.

# Never run the app

Never run the application yourself (e.g. `expo start`, `npm run ios`, `npm run android`, `npm run web`). The user always has it running in a separate terminal already.

# Tech stack

- **Database**: Postgres via [Neon](https://neon.tech)
- **ORM**: [Drizzle](https://orm.drizzle.team)
- **Auth**: [Clerk](https://clerk.com), Google OAuth only, no email/password
- **Background jobs**: [Inngest](https://www.inngest.com) (notification emails only)
- **Error tracking / monitoring**: [Sentry](https://sentry.io) across the mobile app and API routes
- **Email**: [Resend](https://resend.com) for transactional email
- **File storage**: [ImageKit](https://imagekit.io) for private document/photo storage
- **Maps / geocoding**: Google Maps Platform
- **Styling**: NativeWind / Tailwind
- **Backend**: Expo Router API routes (`+api.ts`) in the same project — requires `app.json` → `web.output: "server"` (currently `"static"`, must change before adding API routes)

# Navigation

- This project must **always** use Expo Router native tabs for tab navigation. Never build a custom or JS-rendered tab bar — native tabs only, on every screen that needs tab navigation.
- Prefer `@expo/ui` components over hand-rolled React Native views where a native equivalent exists.
- Use `expo-symbols` (SF Symbols) for icons, not a third-party icon set.
- Use `expo-glass-effect` for Liquid Glass surfaces where the iOS design calls for it.

# Project conventions

- Path aliases: `@/*` → `src/`, `@/assets/*` → `assets/`.
- `reactCompiler` is enabled in `app.json` — don't manually memoize with `useMemo`/`useCallback`; let the compiler handle it.
- `typedRoutes` is enabled — use typed `Link`/`router.push` hrefs.
- No automated test suite required for v1 — TypeScript strict mode + manual QA is the bar. Don't introduce a test framework unprompted.
