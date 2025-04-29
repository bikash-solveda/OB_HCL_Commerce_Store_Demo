# Persistent session

By default, store's persistent session is depending on wc-server.xml Transaction server persistent session setting. Refer to persistent session setup in help center for details.

Store has `rememberMe` checkbox enabled by default. If you didn't want to use it, this can be removed by customization.

### Personalization ID

A side effect of using persistent cookie is that store will automatically get PersonalizationID for free, and this makes it possible for marketing engine to track shopper's activities.

### Remember Me

When `remember me` checkbox is selected during signing in, the following will happen:

1. the login request will be sent with query parameter `rememberMe=true`,
2. the logout request will also be sent with query parameter `rememberMe=true`.
3. upon logging out, the shopper with be remembered with partial authentication.
