# scala.monster

Personal site and blog of Pavels Sisojevs, built with [Astro](https://astro.build) and deployed to Netlify at [scala.monster](https://scala.monster).

## Development

Requires Node 22.23+.

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # static output in dist/
npm run preview  # serve the production build
```

## Structure

- `src/data/cv.ts` — profile, experience, skills; the home page is the CV, rendered from this file
- `src/content/posts/` — blog posts in Markdown; the file name is the URL slug (`zio-test.md` → `/zio-test/`)
- `src/pages/` — routes: home (the CV), `/blog/`, post pages, RSS feed, 404
- `public/` — static files served as-is, including legacy `/assets/img/` paths

Set `draft: true` in a post's front matter to keep it out of the build.

## Deployment

Netlify builds and publishes every push to `master`. The build command, publish directory and Node version are set in `netlify.toml`, which overrides the settings in the Netlify UI.
