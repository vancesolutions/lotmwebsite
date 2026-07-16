# Deploying to Your Domain

This project can be exported as a **static website** you upload to any web host (cPanel, GoDaddy, Bluehost, etc.).

## Create the upload package

From the project root:

```bash
npm install
npm run package
```

This creates **`lotmwebsite-deploy.zip`** in the project root.

## Upload to your host

1. Run `npm run package` locally (or download the zip from the repo release/PR artifacts).
2. Unzip `lotmwebsite-deploy.zip` on your computer.
3. Log in to your hosting control panel (cPanel, Plesk, etc.).
4. Open **File Manager** and go to your web root:
   - Usually `public_html` or `www`
   - For the main domain, files go directly in that folder
5. Upload **all files and folders** from inside the zip:
   - `index.html`
   - `gallery/`
   - `images/`
   - `_next/`
   - `.htaccess` (enable "show hidden files" if you don't see it)
6. Visit your domain — the site should load at `https://yourdomain.com`

## What gets uploaded

| Path | Purpose |
| --- | --- |
| `index.html` | Home page |
| `gallery/index.html` | Photo gallery |
| `images/` | Logo and hero images |
| `gallery/` | Facility photos |
| `_next/` | CSS and JavaScript |
| `.htaccess` | Apache URL and cache rules |

## Requirements

- **Static hosting** is enough — no Node.js required on the server
- Works on Apache (cPanel) with `.htaccess` support
- For **Nginx**, upload the same files; you may need to add a simple `try_files` rule for `/gallery/`

## Rebuild after changes

```bash
npm run package
```

Then re-upload the contents of the new zip (or just changed files).

## Troubleshooting

- **Blank page:** Make sure `index.html` is in the web root, not inside a subfolder.
- **Gallery 404:** Ensure the `gallery` folder uploaded completely with `index.html` inside.
- **Missing images:** Confirm `images/` and `gallery/` folders uploaded with all `.jpeg` and `.png` files.
- **Styles missing:** Confirm the `_next/` folder uploaded fully.
