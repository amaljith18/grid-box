
# React Responsive Grid

This project is a **responsive front-end application** built with React and TypeScript. It features a 3x3 grid of clickable boxes that turn black when clicked and reset to white in the order they were clicked, with a smooth animation, using a "Reset" button.

## Features
- ⚛️ **React**: A powerful library for building user interfaces.
- ⚡️ **Vite**: Fast development with Hot Module Replacement (HMR).
- 🛠️ **TypeScript**: Type-safe development.
- 🧹 **ESLint**: Pre-configured for code quality and best practices.
- 🎨 **Tailwind CSS (Optional)**: Easily integrate for utility-first styling.

---

## Quick Start

1. **Clone the repository:**

   ```bash
   git clone https://github.com/amaljith18/grid-box
   cd grid-box

   amaljith18/grid-box/
├── src/
│   ├── components/       # React components
│   ├── types/            # TypeScript types
│   ├── App.tsx           # Main app component
│   ├── main.tsx          # Entry point
│   └── vite-env.d.ts     # Vite environment types
├── public/               # Static assets
├── .eslintrc.js          # ESLint config
├── tsconfig.json         # TypeScript config
├── vite.config.ts        # Vite config
├── package.json          # Project dependencies
└── README.md             # Project docs
```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```