# 🧪 QA Lab Frontend

This is the frontend application for the QA Lab project—a hands-on practice platform designed to simulate real-world software testing and automation scenarios. It connects to a Spring Boot backend via RESTful web services and is built using a modern React-based stack.

## 🛠️ Tech Stack

| Layer      | Technology                                                                                                                              |
| ---------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| Frontend   | [React](https://react.dev/) + [Vite](https://vitejs.dev/)                                                                               |
| Styling    | [Tailwind CSS](https://tailwindcss.com/) _(planned)_                                                                                    |
| Routing    | [React Router](https://reactrouter.com/)                                                                                                |
| API Calls  | [Axios](https://axios-http.com/)                                                                                                        |
| State Mgmt | [React Query](https://tanstack.com/query) _(planned)_                                                                                   |
| Testing    | [Vitest](https://vitest.dev/), [React Testing Library](https://testing-library.com/), [Playwright](https://playwright.dev/) _(planned)_ |

## 📁 Folder Structure

src/
├── api/ # Axios config + shared API logic
├── features/ # Feature-first organization
│ └── bugReports/ # Bug report domain (components, pages, API, types, tests)
├── hooks/ # Reusable custom hooks
├── routes/ # Centralized routing config
├── styles/ # Tailwind/global styles
├── App.jsx
├── main.jsx
└── setupTests.js # Vitest/RTL setup

## 🧩 Features (WIP)

- [x] Project scaffolded with Vite + React
- [x] Testing environment with Vitest + RTL
- [ ] Bug report listing page (mocked, then API-backed)
- [ ] Create/edit/delete bug reports
- [ ] Input validation and error handling
- [ ] Testing: unit, integration, and E2E

## ▶️ Getting Started

### Install Dependencies

```bash
npm install

```

### Run the Dev Server

```bash

npm run dev

```

### Run Tests

```bash
npx vitest

```

🔗 Backend
This frontend connects to a Spring Boot REST API. Make sure the backend server is running and reachable. API base URL will be configured soon.

📌 Learning Goals
This project is designed to:

Learn modern frontend practices step by step

Connect to real backend APIs

Practice various testing techniques in frontend apps

Build confidence in modern React development

🧠 Contributing & Versioning
Versioning follows development milestones. Commit often and meaningfully, especially after functional or structural changes.

📄 License
MIT License
