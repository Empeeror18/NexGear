# NexGear

A modern e-commerce storefront built with React, Vite, and Tailwind CSS.

## Features

- Product listing and detail pages
- Shopping cart with quantity controls
- Sign up and login flow
- Checkout summary and order placement
- Responsive dark-themed storefront UI

## Tech Stack

- React 19
- Vite
- React Router
- Tailwind CSS
- LocalStorage-based cart/auth persistence

## Getting Started

1. Install dependencies:

   ```bash
   npm install
   ```

2. Start the development server:

   ```bash
   npm run dev
   ```

3. Open the local URL shown in the terminal, usually:
   ```bash
   http://localhost:5173
   ```

## Available Scripts

```bash
npm run dev
npm run build
npm run preview
```

## Project Structure

```text
src/
  components/
  context/
  data/
  pages/
  App.css
  App.jsx
  main.jsx
```

## Notes

- Product and cart data are stored in browser localStorage.
- The app is a front-end demo and does not include a real backend or payment integration.
