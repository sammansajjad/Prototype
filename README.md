# Human Appeal Pakistan — Charity Website

A responsive website built for **Human Appeal Pakistan**, a humanitarian charity, to showcase their mission, projects, impact stories, and news — plus a lightweight admin panel to manage all that content.

Built with plain HTML, CSS, and JavaScript — no frameworks, no build step.

---

## Features

- Responsive, mobile-friendly design
- Hero section with dynamic slideshow
- Animated impact statistics
- Project categories organized by humanitarian sector
- News & articles section with individual story pages
- About page (mission, vision, values, leadership)
- Contact form for inquiries
- JS-based admin panel for managing categories, projects, and news
- Dynamic content rendering (no backend required)

## Tech Stack

- HTML5
- CSS3
- Vanilla JavaScript

## Project Structure

```
Human-Appeal-Pakistan/
├── index.html
├── about.html
├── contact.html
├── news.html
├── articles.html
├── categories.html
├── category.html
│
├── admin/
│   ├── admin.html
│   └── admin.js
│
├── css/
│   └── styles.css
│
├── js/
│   ├── main.js
│   ├── data.js
│   └── admin.js
│
└── assets/
    └── images/
```

## Pages

| Page | Description |
|---|---|
| **Home** | Overview, hero slideshow, impact stats, featured sectors, latest stories |
| **About** | Organization history, mission, vision, values, leadership |
| **Categories** | Browse humanitarian sectors and their projects |
| **Category Details** | Individual project info, stories, and impact reports |
| **News & Articles** | Updates, humanitarian stories, project progress |
| **Contact** | Inquiry form and contact info |

## Admin Panel

A JS-based interface (`/admin`) for managing site content without touching code directly — categories, projects, and news articles are all editable from here.

## Getting Started

This is a static site, so no build tools or dependencies are needed.

1. Clone the repo:
   ```bash
   git clone https://github.com/sammansajjad/Prototype.git
   ```
2. Open `index.html` in your browser, or serve it locally:
   ```bash
   npx serve .
   ```

## Purpose

This project was built to give a humanitarian organization a digital platform to raise awareness, share community impact stories, and let visitors explore different support initiatives.

