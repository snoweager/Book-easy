Book Easy – Dark Mode System
A lightweight, user-friendly theme switcher that allows users to toggle between Light Mode and Dark Mode.
The theme selection is saved, ensuring consistent UI experience across sessions.
________________________________________
Features
=> Theme Switching
•	One-click toggle
•	Light & Dark Theme
=> Persistent Preference
•	Saves user’s choice in localStorage
•	Loads selected theme on next visit
=> UI Enhancements
•	Smooth theme transition effects
•	Compatible with all pages & components
•	TailwindCSS-powered dark mode classes
________________________________________
Tech Stack
Layer	Technology
Frontend	React 18 + TypeScript + Vite
Styling	TailwindCSS
State Management	React Hooks
Theme Storage	Browser localStorage
Deployment	Vercel / Netlify
________________________________________
Project Structure
Book_Easy_Task 5/
│── public/
│── src/
│   ├── components/        # ThemeToggle, Navbar, buttons
│   ├── hooks/             # useTheme hook
│   ├── styles/            # Theme styling / global CSS
│   ├── pages/             # App pages
│   ├── App.tsx
│   └── main.tsx
│── index.html
│── tailwind.config.ts
│── package.json
________________________________________
Setup Instructions
1. Clone the Repository
git clone <repo_url>
cd Book_Easy_Task 5
2. Install Dependencies
npm install
3. Start Development Server
npm run dev
4. Build for Production
npm run build
________________________________________
Core Modules Explained
1. Theme Toggle Component
•	Button or switch UI
•	Calls theme context
•	Applies dark / light mode
2. useTheme Hook
•	Provides:
o	theme state
o	toggleTheme function
o	persistTheme logic
3. Theme Styling
•	Tailwind dark: classes
•	Global variables for smooth transitions
4. Layout Integration
•	Theme toggle added to:
o	Navbar
o	Sidebar
o	Settings section

Contributing
Feel free to open issues or PRs for improvements.
________________________________________
License
MIT License
________________________________________
Author
Padma Sindhoora Ayyagari

