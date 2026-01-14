# Portfolio Website

Welcome to my portfolio website! A modern, high-performance web application showcasing my projects, skills, and experience as a software engineer. Built with the latest web technologies for scalability, type safety, and user experience.

## 🚀 About Me

Hi, I'm **Chanaru Sampath**, a **Senior Software Engineer** passionate about building high-quality software solutions. I specialize in developing scalable web applications, backend services, and cloud-based solutions. This portfolio serves as a central hub for my work and professional journey.

## 🛠️ Tech Stack

This project is built using a modern, industry-standard technology stack:

- **Core**: [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Build Tool**: [Vite](https://vitejs.dev/) (Fast HMR & bundling)
- **Routing**: [TanStack Router](https://tanstack.com/router) (Type-safe routing)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/) + [Tailwindcss-animate](https://github.com/jamiebuilds/tailwindcss-animate)
- **UI Architecture**: [Shadcn/ui](https://ui.shadcn.com/) (Headless accessible components via Radix UI)
- **Form Handling**: [React Hook Form](https://react-hook-form.com/) + [Zod](https://zod.dev/) (Schema validation)
- **Animation**: [Framer Motion](https://www.framer.com/motion/)

## 📂 Project Structure

A scalable and modular directory structure:

```
src/
├── components/        # Shared UI components
│   ├── forms/         # Form-specific components
│   ├── ui/            # Reusable Shadcn/ui primitives (Button, Input, etc.)
│   └── ...            # specific components (Navbar, Header, etc.)
├── lib/               # Utility functions and shared helpers
├── pages/             # Page content/logic (Home, Contact, Resume, Work)
├── routes/            # TanStack Router route definitions and hierarchy
├── schemas/           # Zod validation schemas for forms and data
├── main.tsx           # Application entry point
├── index.css          # Global styles and Tailwind directives
└── vite-env.d.ts      # Vite type definitions
```

## ⚡ Getting Started

Follow these steps to set up the project locally.

### Prerequisites

Ensure you have the following installed:

- **Node.js** (v18 or higher)
- **pnpm** (Recommended package manager)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/chanaru-sampath/portfolio.git
   cd portfolio
   ```

2. Install dependencies:

   ```bash
   pnpm install
   ```

3. Start the development server:
   ```bash
   pnpm dev
   ```
   The app will be available at `http://localhost:5173` (or the port shown in your terminal).

## 📜 Available Scripts

- `pnpm dev`: Starts the development server with HMR.
- `pnpm build`: Type-checks and builds the project for production.
- `pnpm preview`: Locally previews the production build.
- `pnpm lint`: Runs ESLint to check for code quality issues.
- `pnpm format`: Formats code using Prettier.

## 📬 Contact

I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.

- **Email**: [chanarusampath@gmail.com](mailto:chanarusampath@gmail.com)
- **LinkedIn**: [linkedin.com/in/chanarus](https://linkedin.com/in/chanarus)
- **GitHub**: [github.com/chanaru-sampath](https://github.com/chanaru-sampath)

---

© 2024 Chanaru Sampath. All rights reserved.
