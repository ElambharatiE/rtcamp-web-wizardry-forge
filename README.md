# rtcamp Web Wizardry Forge

An enterprise-grade CMS-style dashboard designed to demonstrate scalable, maintainable, and secure web development for large clients like **Google**, **Meta**, and **Indian Express**. Built using **React**, **TypeScript**, **Tailwind CSS**, and modular UI components, this project is tailored to meet the expectations of rtCamp.

---

## 🚀 Features

* **Enterprise Dashboard Interface**

  * Responsive layout with modern UI design
  * Analytics widgets and charts (using `recharts` or similar)
  * Sidebar navigation with role-based access

* **Multi-Role User Management**

  * Admin, Editor, Viewer roles
  * Route-based access control (simulated auth layer)

* **Content Management Simulation**

  * Dynamic content cards (blogs, images, videos)
  * Add/Edit/Delete operations

* **Professional Design System**

  * Modular component library with `shadcn/ui` components
  * Tailwind CSS utility-first design
  * Button, Card, Modal, Table, Tabs, etc.

* **Code Quality & Developer Experience**

  * TypeScript interfaces for data and props
  * Clean folder structure (`components/`, `routes/`, `utils/`)
  * Commit messages follow Conventional Commits
  * ESLint + Prettier configured

---

## 📁 Project Structure

```bash
rtcamp-web-wizardry-forge/
├── public/
├── src/
│   ├── components/
│   │   ├── Dashboard.tsx
│   │   ├── Sidebar.tsx
│   │   ├── UserTable.tsx
│   │   ├── ArticleCard.tsx
│   │   └── ui/
│   │       ├── button.tsx
│   │       └── modal.tsx
│   ├── routes/
│   │   ├── Home.tsx
│   │   ├── Users.tsx
│   │   └── Articles.tsx
│   ├── styles/
│   │   └── index.css
│   ├── types/
│   │   └── index.d.ts
│   ├── App.tsx
│   ├── main.tsx
│   └── utils/
│       └── auth.ts
├── tailwind.config.ts
├── package.json
└── README.md
```

---

## 🛠️ Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/rtcamp-web-wizardry-forge.git
cd rtcamp-web-wizardry-forge
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Run the Development Server

```bash
npm run dev
```

### 4. View in Browser

Open `http://localhost:5173`

---

## 📊 Technologies Used

* React + TypeScript
* Tailwind CSS + shadcn/ui
* Recharts for visualizations
* Vite (build tool)
* Git + GitHub (with proper README and commit history)

---

## 🔐 Role-Based Access Simulation

* **Admin:** Full access to users, content, and analytics
* **Editor:** Access to content, limited analytics
* **Viewer:** Read-only access to dashboard and content

---

## 📈 Demo (Screenshots)

* 📊 Dashboard Metrics Grid
* 👥 User Role Table
* 📰 Article Manager Cards
* 🌓 Light/Dark Mode Toggle

---

## 📄 License

MIT License

---

## 💼 Perfect For

* Showcasing enterprise-level front-end skills
* Demonstrating clean code and scalable UI development
* Complementing PHP + WordPress projects

---

## ✨ Next Steps

* Connect with WordPress REST API to manage real content
* Add authentication layer (JWT + Firebase)
* Deploy via Vercel or Netlify

---

This project directly addresses what **rtCamp** looks for in its developers: solid frontend architecture, JavaScript proficiency, clean interfaces, and scalable component systems. Ready to impress the team!
