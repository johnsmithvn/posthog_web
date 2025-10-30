# TEST_CONFIG_CHECKLIST

Checklist to validate Compass project configuration and high-risk items.

High priority items:
- [ ] Autocapture enabled (Project Settings)
- [ ] Session recording enabled (Project Settings)
- [ ] Authorized URLs include test host/IP
- [ ] API key in .env matches project API key
- [ ] Person display name properties configured (email, user_name, etc)

Medium priority:
- [ ] Timezone set correctly
- [ ] Currency set for billing tests
- [ ] Feature flags configured for test_flag if needed

Risk highlights:
- Missing Authorized URL -> SDK may not send events
- Wrong API key -> events rejected
- Identify called too late -> person mapping mismatch
- Double capture on button (debounce missing) -> inflated metrics
