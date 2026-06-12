# Photo manager (Sveltia CMS)

A small admin UI for uploading, reordering and captioning gallery photos.
It commits changes straight to the Git repository — every save triggers a
GitHub Pages rebuild, so the site updates automatically a few minutes later.

- **Admin URL (live):** https://www.polyanskaya.photography/admin/
- **What it edits:** the photo list of each gallery
  (`src/data/galleries/<slug>.json`) and uploads images to
  `src/assets/portfolio/`. Titles and SEO stay in code (`src/data/galleries.ts`).

---

## How it works

```
Sveltia (/admin) ──commit──▶ GitHub repo ──push to main──▶ GitHub Actions ──▶ Pages
```

Each gallery is one entry under **Galleries**. Open it, drag rows to reorder,
click **+** to add a photo (upload or pick an existing one), fill the optional
alt text, then **Save**. Astro optimizes every image at build time (resizes +
modern formats), so you can upload full-resolution files.

---

## Local editing (no setup, recommended for trying it out)

Sveltia opens the local repository straight from the browser via the File
System Access API — **no proxy server, no GitHub login**:

```bash
npm run dev
```

Then, in a Chromium browser (Chrome/Edge/Arc), open
http://localhost:4321/admin/ → click **Work with Local Repository** → pick this
project's folder. Saves write directly to the JSON files and
`src/assets/portfolio/` on disk; commit them with git when you're happy.

> The File System Access API is Chromium-only. In Safari/Firefox, use the
> production GitHub login below instead.

---

## Production login (one-time setup)

GitHub Pages is static, so GitHub OAuth needs a tiny auth proxy. Use the
official **sveltia-cms-auth** Cloudflare Worker (free):

1. **Create a GitHub OAuth App**
   GitHub → Settings → Developer settings → OAuth Apps → *New OAuth App*.
   - Homepage URL: `https://www.polyanskaya.photography`
   - Authorization callback URL: `https://<your-worker>.workers.dev/callback`
   - Note the **Client ID** and generate a **Client Secret**.

2. **Deploy the Worker**
   Follow https://github.com/sveltia/sveltia-cms-auth — deploy to Cloudflare
   Workers and set the env vars:
   - `GITHUB_CLIENT_ID`, `GITHUB_CLIENT_SECRET`
   - `ALLOWED_DOMAINS` = `www.polyanskaya.photography`

3. **Point the CMS at the Worker**
   In [`config.yml`](./config.yml), uncomment and set under `backend:`
   ```yaml
   base_url: https://<your-worker>.workers.dev
   ```

4. Open `/admin/`, click **Sign in with GitHub**. Done.

> The GitHub account used to log in must have write access to
> `joinjoohny/photoportfolio`.

---

## Notes

- `/admin/` is excluded from search engines (`robots.txt` + `noindex`).
- Adding a **new** gallery is still a code change (`src/data/galleries.ts`
  for title/SEO, a new `src/data/galleries/<slug>.json`, and a `files:` entry
  in `config.yml`). The CMS manages photos within existing galleries.
- Deleting a gallery file is disabled in the CMS (`delete: false`) to avoid
  accidentally removing a gallery.
