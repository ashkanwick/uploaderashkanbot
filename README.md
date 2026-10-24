# Telegram FileStore Bot (Cloudflare Workers & D1)

A Telegram bot that stores files in a private Telegram channel and generates unique, shareable download links/codes. Powered by Cloudflare Workers and Cloudflare D1 SQL database.

## Features
- 🌐 Multi-language interface support (10 languages)
- 🗄️ Serverless storage using Cloudflare Workers & D1
- 🔒 Secure webhook authentication
- 👑 Admin panel with forced-join channel gating, stats, and auto-delete

## Files
- `worker.js`: Cloudflare Worker application code
- `schema.sql`: Cloudflare D1 database table structure
- `wrangler.toml`: Cloudflare Wrangler configuration

## Setup

> **Note:** No secrets live in this repository. Keep it that way.

1. Install dependencies and log in:
   ```
   npm install -g wrangler
   wrangler login
   ```

2. Create a D1 database and update `wrangler.toml` with your `database_name` and `database_id`:
   ```
   wrangler d1 create your-database-name
   wrangler d1 execute your-database-name --file=schema.sql --remote
   ```

3. Set your secrets (never put them in `wrangler.toml`):
   ```
   wrangler secret put BOT_TOKEN
   wrangler secret put WEBHOOK_SECRET
   wrangler secret put OWNER_ID
   ```
   - `BOT_TOKEN`: token from [@BotFather](https://t.me/BotFather)
   - `WEBHOOK_SECRET`: any long random string
   - `OWNER_ID`: your numeric Telegram user ID

4. For local development, create a `.dev.vars` file (gitignored) with the same keys.

5. Deploy:
   ```
   wrangler deploy
   ```
