# EcoBarangay Cloudflare entrypoint

This repository is connected to the Cloudflare Worker service `final-ecobarangay2`.
The worker uses `wrangler.jsonc` as its deploy configuration and forwards requests
to the existing production app at `https://ecobarangay.netlify.app`. This keeps the
current frontend and Netlify Functions working while giving the Cloudflare Worker
its own `workers.dev` URL.

The application source of truth remains
[`final-ecobarangay`](https://github.com/lancelotanesu77-sys/final-ecobarangay).
