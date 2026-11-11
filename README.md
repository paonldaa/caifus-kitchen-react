# Caifu's Kitchen - React JS Project

A responsive restaurant website built with React, Vite and React Router.

## Run locally
```bash
npm install
npm run dev
```
Open the link shown in the terminal (usually http://localhost:5173).

## Build for hosting
```bash
npm run build
```
Deploy the `dist` folder (Netlify) or import the GitHub repo (Vercel / Render).
`public/_redirects` and `vercel.json` make page refreshes work with React Router.

## Features
- Pages: Home, About, Menu (services), Contact - using React Router
- Reusable components with props (`ServiceCard`, `InfoBlock`)
- `useState` (menu toggle, special-of-the-day, filters, cart count, form)
- `useEffect` + localStorage (order count is saved)
- Search and category filtering on the menu
- Controlled contact form with validation (required fields, email format, message length)
- External CSS, Flexbox/Grid, media queries, no horizontal overflow

## Structure
```
src/
  main.jsx        entry file
  App.jsx         routes + shared state
  styles.css
  components/     Navbar, Footer, ServiceCard, InfoBlock
  pages/          Home, About, Services, Contact
  data/menu.js    menu array displayed with .map()
public/images/    SVG images
```
