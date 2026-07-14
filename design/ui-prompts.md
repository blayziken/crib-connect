# CribConnect — UI Design Image-Generation Prompts

Reference prompts for generating UI mockup images (Midjourney, DALL·E, Stable Diffusion, etc.) covering the full screen set implied by [PLAN.md](../PLAN.md). Grouped into batches that follow the user journey — one image can't legibly render every screen, and image models garble text/layout less when given fewer screens at once.

## Shared design language

Append this to every batch prompt below for visual consistency:

> Design language: minimalist, rounded corners (16-20px radius), soft card shadows, generous whitespace. Primary color a bright trustworthy blue (#208AEF), light blue backgrounds (#E6F4FE), white cards, dark slate text, small green "Verified" badge accents. Friendly, approachable, safety-focused tone for international students new to Canada. Sans-serif rounded typography similar to SF Pro / Inter. High-fidelity product design mockup, Dribbble/Behance style, soft studio lighting, phone-frame mockups only, no hands.

---

## Combined Prompt — All Screens in One Poster

Use this when you want a single generated image covering the whole app instead of running the batches separately. Note: with this many screens, expect text/labels to be less crisp than the individual batches above — treat this as a mood-board/poster overview rather than pixel-accurate mockups, and fall back to the batches for anything you need to actually read clearly.

> A UI design kit poster showcasing the complete screen flow for "CribConnect," a mobile student housing rental app for international college students near Georgian College in Barrie, Ontario. Laid out as a large grid of rounded iPhone-frame mockups (11 phone screens) plus one browser-frame desktop mockup, arranged in rows following the user journey left to right, top to bottom, on a light neutral background with generous spacing between frames and small caption labels under each screen.
>
> Row 1 — Entry & Onboarding: (1) Splash screen: solid bright blue background, centered white house/key logo mark, "CribConnect" wordmark. (2) Sign-in screen: white background, logo, headline "Find your home near Georgian College," a single large "Continue with Google" button, no email/password fields. (3) Onboarding screen: pagination dots, friendly illustration of a map pin near a campus building, headline "Search homes by distance to campus."
>
> Row 2 — Browse & Search: (4) Home feed: top search bar with filter icon, scrolling list of rental cards with photo, "0.8 km from campus" distance badge, monthly price, type tag (Private Room / Entire Unit / Shared Room), furnished/utilities icons, save heart icon. (5) Filter sheet: bottom modal with price range slider, distance slider, listing-type chips, furnished/utilities toggles, bedrooms stepper, move-in date picker, "Apply Filters" button. (6) Map view: map with a labeled "Georgian College" campus pin, clustered price-bubble pins nearby, bottom sheet carousel of listing cards.
>
> Row 3 — Listing & Contact: (7) Listing detail: full-width photo carousel, price, distance badge, amenity icon row, a locked "Contact info — Verified Students Only" section, primary "Request Info" button. (8) Request confirmation: centered checkmark illustration, headline "Request sent!", subtext about landlord email notification.
>
> Row 4 — Trust & Verification: (9) Verification upload: headline "Verify you're a Georgian College student," dashed-border document upload card, privacy reassurance line, "Upload & Submit" button. (10) Profile/verification status: avatar, name, status badge ("Verification Pending" amber or "Verified" green with checkmark), account settings list. (11) Report modal: centered sheet titled "Report this listing," radio reason options (Scam, Inaccurate info, Inappropriate, Other), text field, red "Submit Report" button.
>
> Row 5 — Admin (desktop browser frame): CribConnect Admin web panel, left sidebar with Listings / Verification Queue / Leads / Reports icons, main panel showing a data table of listings (thumbnail, address, price, type, status columns), "Add Listing" button top right.
>
> Design language: minimalist, rounded corners (16-20px radius), soft card shadows, generous whitespace. Primary color a bright trustworthy blue (#208AEF), light blue backgrounds (#E6F4FE), white cards, dark slate text, small green "Verified" badge accents. Friendly, approachable, safety-focused tone for international students new to Canada. Sans-serif rounded typography similar to SF Pro / Inter. High-fidelity product design system poster, Dribbble/Behance style, soft studio lighting, consistent framing and spacing across all mockups, no hands, no extraneous UI chrome beyond what's described.

---

## Batch A — Entry & Auth (Splash → Sign-in → Onboarding)

> Mobile app UI showcase for "CribConnect," a student housing app, shown as 3 iPhone screens in rounded frames on a light neutral background.
> **Screen 1 — Splash:** solid bright blue (#208AEF) background, centered simple white house/key logo mark, app name "CribConnect" in clean rounded type beneath it.
> **Screen 2 — Sign-in:** white background, logo mark at top, headline "Find your home near Georgian College," subtext about verified student housing in Barrie, one large rounded "Continue with Google" button with the Google "G" icon, small privacy/terms text at the bottom, no email or password fields visible.
> **Screen 3 — Onboarding:** a carousel screen mid-swipe with pagination dots at the bottom, a friendly illustration of a map pin near a campus building, headline "Search homes by distance to campus," short supporting sentence, a "Next" button bottom right.

## Batch B — Core Browse (Feed → Filters → Map)

> Same CribConnect app, 3 iPhone screens.
> **Screen 1 — Home Feed:** top search bar with filter icon, vertical scrolling list of rental cards each with a photo, "0.8 km from campus" distance badge, monthly price, a type tag ("Private Room" / "Entire Unit" / "Shared Room"), small furnished/utilities icons, and a save heart icon.
> **Screen 2 — Filter Sheet:** a bottom sheet modal over a dimmed feed background, with sliders/toggles for price range, distance to campus, listing type chips (Entire Unit, Private Room, Shared Room), furnished toggle, utilities-included toggle, bedrooms stepper, move-in date picker, and an "Apply Filters" button.
> **Screen 3 — Map View:** a map with a distinct pin labeled "Georgian College" campus, clustered price-bubble pins nearby, and a bottom sheet peeking up with a horizontally scrollable carousel of listing cards.

## Batch C — Listing Detail & Contact

> Same CribConnect app, 2 iPhone screens.
> **Screen 1 — Listing Detail:** full-width photo carousel at top with dot indicators, listing title and address area, price, distance-to-campus badge, amenity icon row (furnished, utilities, bedrooms, lease length), a locked section labeled "Contact info — Verified Students Only" with a small lock icon, and a primary "Request Info" button pinned at the bottom.
> **Screen 2 — Request Confirmation:** a centered success state with a checkmark illustration, headline "Request sent!", subtext explaining the landlord will be notified by email, and a "Back to listings" button.

## Batch D — Verification & Trust

> Same CribConnect app, 3 iPhone screens.
> **Screen 1 — Verification Upload:** friendly reassuring copy "Verify you're a Georgian College student," a dashed-border upload card with a document/camera icon, small privacy reassurance line ("Your document is deleted after review"), and an "Upload & Submit" button.
> **Screen 2 — Verification Status (Profile):** a profile screen with avatar, name, and a status badge card showing "Verification Pending" in amber, or "Verified" in green with a checkmark, plus basic account settings list below.
> **Screen 3 — Report Modal:** a small centered modal/sheet titled "Report this listing," a list of reason radio options (Scam, Inaccurate info, Inappropriate, Other), a text field, and a red-outlined "Submit Report" button.

## Batch E — Admin Web Panel

> A desktop web app screenshot mockup for the "CribConnect Admin" internal tool, browser window frame, light background.
> Left sidebar navigation with icons for Listings, Verification Queue, Leads, Reports. Main panel shows a data table of listings with columns for photo thumbnail, address, price, type, and status, plus an "Add Listing" button top right. Clean, functional, data-dense internal-tool aesthetic (more utilitarian than the consumer app, but same blue/white brand accents).

---

## Tips

- If a multi-screen batch renders messy or garbles text, fall back to generating one screen at a time using just that screen's description + the shared design language block.
- Keep the shared design-language block identical across every generation run to maximize visual consistency between batches.
