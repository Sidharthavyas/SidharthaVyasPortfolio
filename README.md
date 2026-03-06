<div align="center">

# ⚡ Sidhartha Vyas — Portfolio

**Backend Engineer · System Design · AI Integration**

A modern, responsive developer portfolio built with React, TypeScript, and Vite — featuring live GitHub analytics, smooth animations, and a clean dark-mode design.

[![Live Demo](https://img.shields.io/badge/Live-Demo-22d3ee?style=for-the-badge&logo=vercel&logoColor=white)](https://sidharthavyasportfolio.vercel.app)
[![GitHub](https://img.shields.io/badge/GitHub-Sidharthavyas-181717?style=for-the-badge&logo=github)](https://github.com/Sidharthavyas)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Sidhartha_Vyas-0A66C2?style=for-the-badge&logo=linkedin)](https://www.linkedin.com/in/sidhartha-vyas/)

</div>

---

## ✨ Features

| Feature | Description |
|---------|-------------|
| 🎨 **Dark-mode Design** | Premium dark UI with cyan accents, glassmorphism, and micro-animations |
| 📊 **Live GitHub Stats** | Real-time contribution count, streak, language distribution, and repo data pulled from GitHub APIs |
| 📱 **Fully Responsive** | Optimized for mobile, tablet, and desktop — no jitter, clean stacking |
| ⚡ **One-Click Contact** | Gmail compose for job opportunities, WhatsApp for quick messages |
| 🗂️ **Case Studies** | Dedicated pages for each project with in-depth breakdowns |
| 🔄 **Smooth Animations** | Framer Motion powered scroll-triggered animations throughout |
| 📄 **Resume Download** | One-click PDF resume download |
| 🧩 **Contribution Heatmap** | GitHub-style activity heatmap with hover interactions |

---

## 🛠️ Tech Stack

| Layer | Technologies |
|-------|-------------|
| **Frontend** | React 19, TypeScript, Vite |
| **Styling** | Tailwind CSS, Vanilla CSS, Inline Styles |
| **Animations** | Framer Motion (`motion/react`) |
| **Charts** | Recharts (Pie charts, responsive containers) |
| **Icons** | Lucide React |
| **Routing** | React Router v7 |
| **Data** | GitHub REST API, GitHub Contributions API |

---

## 📁 Project Structure

```
src/
├── app/
│   ├── components/
│   │   ├── Hero.tsx            # Landing section with typewriter effect
│   │   ├── About.tsx           # Bio + technical pillars
│   │   ├── Skills.tsx          # Categorized skill tags
│   │   ├── Experience.tsx      # Timeline-based work history
│   │   ├── Projects.tsx        # Project cards with tech stacks
│   │   ├── GitHubAnalytics.tsx # Live GitHub stats dashboard
│   │   ├── Contact.tsx         # Quick-reach + contact info
│   │   ├── Navigation.tsx      # Responsive navbar with mobile menu
│   │   └── Footer.tsx          # Footer with social links
│   ├── data/
│   │   └── portfolio.ts        # All portfolio data & color tokens
│   └── hooks/
│       └── useGitHubData.ts    # Custom hook for live GitHub data
├── styles/
│   ├── index.css               # Global styles & imports
│   ├── responsive.css          # Media queries for all breakpoints
│   ├── fonts.css               # Font declarations
│   └── tailwind.css            # Tailwind config
└── main.tsx                    # App entry point
```

---

## 🚀 Getting Started

```bash
# Clone the repository
git clone https://github.com/Sidharthavyas/SidharthaVyasPortfolio.git
cd SidharthaVyasPortfolio

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

The dev server runs at `http://localhost:5173`

---

## 📊 Live GitHub Integration

The portfolio pulls **real data** from GitHub — no hardcoded stats:

- **Contributions & Streak** — via [GitHub Contributions API](https://github-contributions-api.jogruber.de)
- **Repositories, Stars, Languages** — via GitHub REST API (`/users/{username}/repos`)
- **30-minute cache** — stored in `sessionStorage` to minimize API calls
- **Graceful fallback** — shows default data if APIs are unreachable

---

## 📱 Responsive Breakpoints

| Breakpoint | Target |
|-----------|--------|
| `< 400px` | Small mobile (stats stack to 1-col) |
| `< 640px` | Mobile (all grids → 1-col, nav → hamburger) |
| `640–1023px` | Tablet (about + projects → 1-col) |
| `≥ 1024px` | Desktop (full layout) |

---

## 📬 Contact

- **Job Opportunities** → Opens Gmail compose with pre-written message
- **Quick Chat** → WhatsApp direct message
- **Email** → vsidhartha71@gmail.com
- **LinkedIn** → [sidhartha-vyas](https://www.linkedin.com/in/sidhartha-vyas/)
- **GitHub** → [Sidharthavyas](https://github.com/Sidharthavyas)

---

<div align="center">

Built with ❤️ by **Sidhartha Vyas**

</div>