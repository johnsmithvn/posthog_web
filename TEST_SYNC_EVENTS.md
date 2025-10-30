# TEST_SYNC_EVENTS

This file contains step-by-step test cases to verify events flow from client -> Compass server.

## Important notes
- Ensure your Compass web snippet is injected into index.html (head).
- Use DevTools Network tab and filter requests to your Compass `api_host` (e.g. `/e/` endpoints).
- Validate Live Events and Persons in Compass UI.

## Test cases (high priority)
TC-01: page_view on Home
- Steps: open /
- Expected: page_view (or $pageview) event appears in Live Events

TC-02: login -> identify
- Steps: open /login, fill email, click Login
- Expected: user_login event, identify called; Person created/updated with properties: email, name, user_name

TC-03: add_cash
- Steps: on /dashboard click Add Cash (enter amount)
- Expected: add_cash captured with payload { amount, currency }

TC-04: billing_payment
- Steps: on /billing click Pay (simulate payment)
- Expected: billing_payment captured with plan/price properties

TC-05: rage_click
- Steps: click fast 3 times on Rage area on /dashboard
- Expected: rage_click or $rageclick appears

TC-06: session recording
- Steps: enable session recording in Compass project; perform interactions; open Recordings
- Expected: recording exists for the session

TC-07: offline retry
- Steps: go offline, trigger add_cash, go online
- Expected: event sent after reconnect (if SDK supports retry)

TC-08: user_logout
- Steps: click Logout on /dashboard
- Expected: user_logout event and compass.reset() behaviour (person cleared/anonymous)

...additional lower priority cases included in full checklist
