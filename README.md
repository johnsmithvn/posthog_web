# Leanbase Compass QE Demo (Full)

This is a small Vue 3 + Vite demo app to help QE test Leanbase Compass tracking flows.
It intentionally does NOT include the Compass SDK snippet — paste your project's snippet into `index.html` (in the head).

## Quickstart

1. Extract zip, cd into project folder.
2. Copy example env and edit:
   ```bash
   cp .env.example .env
   # edit .env to set VITE_COMPASS_API_KEY and VITE_COMPASS_API_HOST if needed
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Run dev server (allow LAN access):
   ```bash
   npm run dev -- --host 0.0.0.0 --port $VITE_APP_PORT
   ```
5. Open `http://localhost:5173` (or `http://<your-ip>:5173` from another device)

## What this app covers

- Pages: Home, Login, Dashboard, Billing, Cash, Profile, Feedback, Error
- Events (snake_case): page_view, button_click, rage_click, user_login, user_logout, add_cash, billing_payment, withdraw_cash, upgrade_plan, downgrade_plan, view_billing_page, change_profile, error_occurred, invite_friend, task_created, task_completed, view_dashboard, view_login_page, open_modal, feature_used, feedback_submitted
- Person properties sent at login (sample): email, name, user_name, initial_channel_type, initial_referring_domain_type, total_revenue, total_revenue_last_30_days

## How to use

- Add your Compass web snippet into `index.html` head area.
- Start the app and perform flows:
  - Login (calls identify & user_login)
  - Dashboard actions: add cash, billing payment, rage click, etc.
  - Check Compass Live Events & Persons to validate capture and person properties.

## Files of interest
- `src/composables/useCompass.js` — wrapper that uses `window.compass` if available, otherwise logs to console (safe for running without snippet)
- `TEST_SYNC_EVENTS.md` — step-by-step event test cases
- `TEST_CONFIG_CHECKLIST.md` — checklist for Compass project config and risk highlights

