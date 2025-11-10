# Field Bureau + Werkstatt

Official website for Field Bureau + Werkstatt LLC.

## Getting Started

### Development

```bash
# Install dependencies
npm install

# Start dev server
npm run dev
```

Visit `http://localhost:4321` to view the site.

### Building

```bash
# Build for production
npm run build

# Preview production build
npm run preview
```

## Deployment

This site is configured to deploy automatically to GitHub Pages via GitHub Actions.

### Setup GitHub Pages

1. Push your code to a GitHub repository
2. Go to repository Settings > Pages
3. Under "Build and deployment":
   - Set Source to "GitHub Actions"
4. Push to the `main` branch to trigger deployment

### Custom Domain (fieldbw.com)

1. In your repository Settings > Pages
2. Add `fieldbw.com` as a custom domain
3. Configure your DNS provider:
   - Add a CNAME record pointing to `<username>.github.io`
   - Or add A records pointing to GitHub's IPs

## Project Structure

```
/
├── public/          # Static assets (images, fonts, etc.)
│   ├── bg1.jpeg     # Background image option 1
│   └── bg2.jpeg     # Background image option 2
├── src/
│   ├── layouts/     # Reusable layouts
│   │   └── BaseLayout.astro
│   ├── pages/       # Site pages (file-based routing)
│   │   ├── index.astro
│   │   └── about.astro
│   └── styles/      # Global styles
│       └── global.css
└── .github/
    └── workflows/   # GitHub Actions workflows
        └── deploy.yml
```

## Adding New Project Pages

To add a new project page (e.g., `/note-taker`):

1. Create `src/pages/note-taker.astro` (or `note-taker/index.astro` for subdirectories)
2. The page will automatically be available at `/note-taker`

## Subdirectories for Other Tools

For tools like MkDocs that generate their own static sites:

1. Build the tool's static site
2. Copy the output to `public/<subdirectory-name>`
3. The content will be available at `/<subdirectory-name>`

Example:
```bash
# Build MkDocs site
cd docs
mkdocs build
cp -r site ../public/support
```

## Technologies

- [Astro](https://astro.build) - Static Site Generator
- [Tailwind CSS](https://tailwindcss.com) - Styling
- GitHub Pages - Hosting
