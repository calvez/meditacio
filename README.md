# A helyes meditáció

Taigen Shodo Roshi: *A helyes meditáció* (Egy Csepp Alapítvány, 2022) as an Astro site on Cloudflare.

- `meditacio.htm` – the PDF-derived source. The chapters in `src/content/chapters` were generated from it once and then cleaned by hand (PDF line breaks, soft hyphens, a few obvious typos); edit the markdown directly.
- Illustrations are served from `https://cdn.digitalhumanities.hu/meditacio-N.{png,jpg}`.

```sh
npm install
npm run dev
npm run build
```
