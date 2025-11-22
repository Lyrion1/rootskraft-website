# Monetization

## Ads (Blog & Live)

The site uses Google AdSense for monetization on blog and live content pages.

### Environment Variables

Configure these environment variables in your `.env.local` file and in your deployment environment (e.g., Netlify):

#### AdSense Client
- `NEXT_PUBLIC_ADSENSE_CLIENT` – Your AdSense publisher ID (format: `ca-pub-xxxxxxxxxxxxxxxx`)

#### Ad Slot IDs

Env slots:
- `NEXT_PUBLIC_ADSENSE_SLOT_BLOG_MAIN` – in-article/main blog slot id (numeric)
- `NEXT_PUBLIC_ADSENSE_SLOT_BLOG_FOOTER` – footer/end-of-post slot id (numeric)

### Example Configuration

Add these to your `.env.local`:

```bash
NEXT_PUBLIC_ADSENSE_CLIENT=ca-pub-xxxxxxxxxxxxxxxx
NEXT_PUBLIC_ADSENSE_SLOT_BLOG_MAIN=1234567890
NEXT_PUBLIC_ADSENSE_SLOT_BLOG_FOOTER=0987654321
```

### How It Works

- If environment variables are not set, ad slots will not render (graceful degradation)
- The `AdSlot` component automatically handles script loading and ad initialization
- Ads are displayed on:
  - Blog index page (main slot, below posts grid)
  - Individual blog post pages (main slot in-article, footer slot at end)

### Deployment

Remember to set these environment variables in your Netlify dashboard:
1. Go to Site settings → Environment variables
2. Add each variable with its corresponding value
3. Redeploy the site for changes to take effect
