# ForgiveMe App

A frontend project built with interactive web components and modern CSS structures, aiming to create a humorous and engaging user experience (UX).

🔗 **[Click Here for the Live Demo](https://lutfen-beni-affet.netlify.app)**

## About the Project
This project is designed to establish a "playful" interaction with the user by leveraging React's state management and fundamental hook structures.

### Key Features
- **Interactive Escape Mechanism:** The "No" button runs away to random positions on the screen when hovered over or clicked.
- **Emotional Animations:** Confetti effects and dynamic teddy bear GIFs triggered upon being forgiven.
- **UX Optimization:** Browser "Back" button protection (popstate management) ensures the user remains engaged within the application.
- **Responsive Design:** A fully compatible interface across mobile and desktop devices using Tailwind CSS.

## Technologies Used
- **Framework:** [React](https://react.dev/) (Vite)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Animation/Effect:** `react-confetti`
- **Deployment:** Netlify

## How It Works

- The "No" button's position is kept in React state; on hover or click it moves to a random point within the viewport.
- Accepting switches the view to a celebration screen with `react-confetti` and a GIF.
- A `popstate` listener intercepts the browser Back button so the user stays on the page.

## Getting Started

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # production build in dist/
```

## Project Structure

```
├── public/        # GIFs and icons
├── src/
│   ├── App.jsx    # all interaction logic and views
│   ├── main.jsx   # React entry point
│   └── index.css  # Tailwind CSS
└── vite.config.js
```
