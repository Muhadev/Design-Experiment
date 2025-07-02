// Project: CoinProfile Landing Page Clone
// Stack: Next.js (App Router), Tailwind CSS, Framer Motion, TypeScript

/************************************
1. Directory Structure (Refined)
************************************/
/coinprofile-clone
├── app
│   ├── layout.tsx          // Root layout wrapper
│   ├── page.tsx            // Main landing page
│   └── globals.css         // Tailwind base styles
├── components
│   ├── Navbar.tsx          // Navigation bar
│   ├── Hero.tsx            // Hero section with calculator
│   ├── Calculator.tsx      // Functional calculator logic/UI
│   ├── Features.tsx        // Feature showcase section
│   ├── HowItWorks.tsx      // Explanation section
│   ├── Pricing.tsx         // Pricing plans
│   ├── Footer.tsx          // Footer section
├── public
│   └── assets              // Images, icons, etc.
├── styles
│   └── animations.ts       // Framer Motion variants
├── types
│   └── index.ts            // Shared types/interfaces
├── utils
│   └── calculator.ts       // Helper logic for calculator
├── tailwind.config.ts
├── postcss.config.js
├── tsconfig.json
├── next.config.js
├── package.json
├── README.md               // Project documentation

/************************************
README.md
************************************/

# 🪙 CoinProfile Landing Page Clone

A high-quality, responsive clone of the [CoinProfile](https://coinprofile.com/) landing page built using modern web development tools. This project replicates the core design and functionality—including an interactive hero section calculator—following a modular and scalable architecture, and is optimized for deployment on Vercel.

## 📸 Preview

> ✅ Live Demo: [https://design-experience-v1.vercel.app](https://design-experience-v1.vercel.app)

## ✨ Features

- 🔥 Fully responsive modern UI
- ⚡️ Interactive calculator in the hero section
- 🎨 Smooth animations using Framer Motion
- 🧱 Modular, component-based structure
- 🌐 Optimized for SEO and performance
- 📦 Ready for deployment on Vercel

---

## 🚀 Tech Stack

| Tool / Library     | Purpose                                  |
|--------------------|------------------------------------------|
| **Next.js (App Router)** | React framework with file-based routing |
| **TypeScript**      | Type-safe modern JavaScript             |
| **Tailwind CSS**    | Utility-first styling framework         |
| **Framer Motion**   | Declarative animations and transitions  |
| **Vercel**          | Deployment and CI/CD                    |
| **Inter** (Google Font) | Clean sans-serif UI typography     |

---

## 📁 Project Structure

```
/coinprofile-clone
├── app/                  # App router layout and pages
│   ├── layout.tsx        # Root layout wrapper
│   ├── page.tsx          # Main landing page
│   └── globals.css       # Tailwind base styles
├── components/           # Reusable UI components
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── Calculator.tsx
│   ├── Features.tsx
│   ├── HowItWorks.tsx
│   ├── Pricing.tsx
│   └── Footer.tsx
├── styles/               # Shared animation variants
│   └── animations.ts
├── utils/                # Business logic (e.g., calculator logic)
│   └── calculator.ts
├── public/               # Assets like images and icons
├── types/                # Global TypeScript types
│   └── index.ts
├── tailwind.config.ts    # Tailwind CSS configuration
├── tsconfig.json         # TypeScript configuration
├── next.config.js        # Next.js config
└── package.json
```

---

## 🛠️ Installation & Development

1. **Clone the repo**
   ```bash
   git clone https://github.com/Muhadev/Design-Experiment.git
   cd coinprofile-clone
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:3000
   ```

---

## 🧮 Calculator Logic

The hero section includes a simple investment calculator:
- Accepts USD investment amount
- Accepts expected crypto growth in %
- Computes the estimated future value

The calculator is client-side only, handled using `useState` and updated on user input.

---

## 📦 Deployment (Vercel)

1. Push your code to GitHub.
2. Visit [https://vercel.com](https://vercel.com) and import your project.
3. It auto-detects the Next.js app and deploys it.

---

## 📚 Future Improvements

- Add mobile navigation toggle
- Add animations to all sections
- Fetch real-time crypto data from public APIs
- Theme toggle (dark/light mode)
- Unit tests for calculator logic

---

## 🧑‍💻 Author

Built with ❤️ by [Fayemi Muhammed](https://github.com/Muhadev)

---

## 📄 License

This project is for educational/demo purposes only and is **not affiliated** with CoinProfile.

---
