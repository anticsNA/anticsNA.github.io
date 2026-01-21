# Portfolio Website

A simple, static portfolio website built with vanilla HTML, CSS, and JavaScript.

## Features

- Dark theme design
- Responsive layout
- Smooth scrolling animations
- Scroll-triggered fade-in effects
- Contact form
- GitHub Pages ready

## Structure

```
portfolio/
├── index.html          # Main landing page
├── about.html          # About page
├── projects.html       # Projects showcase
├── contact.html        # Contact page
├── css/
│   ├── variables.css   # CSS custom properties (dark theme)
│   ├── main.css        # Main stylesheet
│   └── animations.css  # Animation utilities
├── js/
│   ├── main.js         # Main JavaScript logic
│   ├── theme.js        # Theme management
│   └── animations.js   # Scroll animations
└── assets/
    ├── images/         # Portfolio images
    └── icons/          # Icons/SVGs
```

## Local Development

To run the site locally, you can use Python's built-in HTTP server:

```bash
python3 -m http.server 8000
```

Or use the npm script:

```bash
npm run dev
```

Then open `http://localhost:8000` in your browser.

## GitHub Pages Deployment

1. Push your code to the `main` branch (or `master` branch)
2. Go to your repository settings on GitHub
3. Navigate to "Pages" in the sidebar
4. Under "Source", select your branch (usually `main`)
5. Select `/portfolio` as the folder (or root if you move files)
6. Click "Save"

Your site will be available at `https://yourusername.github.io/portfolio/`

## Customization

- Edit `css/variables.css` to change colors and theme
- Update content in HTML files
- Add your project images to `assets/images/`
- Modify `js/main.js` for additional functionality

## Browser Support

Modern browsers (Chrome, Firefox, Safari, Edge) with ES6+ support.
