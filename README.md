# Markham Infinity

A modern, responsive website for Markham Infinity dealership built with React and Vite.

## 🚀 Technologies Used

- **React** (v19.2.6) - JavaScript library for building user interfaces
- **React Router DOM** (v7.15.1) - Declarative routing for React applications
- **Vite** (v8.0.12) - Next-generation frontend build tool
- **CSS Modules** - Scoped and modular CSS styling
- **ESLint** - Code linting and quality assurance

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (v16 or higher)
- **npm** (v7 or higher) or **yarn**

## 🛠️ Setup Instructions

### 1. Clone the Repository

```bash
git clone <repository-url>
cd makrhamInfinity
```

### 2. Install Dependencies

```bash
npm install
```

or if you're using yarn:

```bash
yarn install
```

### 3. Run Development Server

```bash
npm run dev
```

or with yarn:

```bash
yarn dev
```

The application will start at `http://localhost:5173` (default Vite port)

### 4. Build for Production

```bash
npm run build
```

or with yarn:

```bash
yarn build
```

The production-ready files will be generated in the `dist` folder.

### 5. Preview Production Build

```bash
npm run preview
```

or with yarn:

```bash
yarn preview
```

## 📁 Project Structure

```
makrhamInfinity/
├── public/                 # Static assets
│   ├── favicon.svg
│   └── icons.svg
├── src/
│   ├── assets/            # Images, videos, and media files
│   ├── components/
│   │   ├── common/        # Reusable components
│   │   ├── layout/        # Layout components (Header, Footer, etc.)
│   │   │   └── header/
│   │   │       ├── Header.jsx
│   │   │       ├── Navbar.jsx
│   │   │       ├── Topbar.jsx
│   │   │       ├── header.module.css
│   │   │       └── topbar.module.css
│   │   └── sections/      # Page sections
│   │       ├── ContactSection/
│   │       ├── HeroSection/
│   │       ├── MediaSection/
│   │       ├── ModelShowroom/
│   │       ├── QuickActions/
│   │       └── WelcomeSection/
│   ├── pages/             # Page components
│   │   └── Home.jsx
│   ├── App.jsx            # Main App component
│   ├── App.css            # Global app styles
│   ├── index.css          # Global styles
│   └── main.jsx           # Application entry point
├── .gitignore
├── eslint.config.js       # ESLint configuration
├── index.html             # HTML template
├── package.json           # Project dependencies
├── vite.config.js         # Vite configuration
└── README.md
```

## ✨ Features

- **Responsive Design** - Fully responsive from 320px to desktop (4K)
- **Mobile Navigation** - Hamburger menu with full-screen overlay on mobile devices
- **CSS Modules** - Component-scoped styling for better maintainability
- **React Router** - Client-side routing for seamless navigation
- **Modern UI** - Clean and professional design
- **Optimized Performance** - Built with Vite for fast development and production builds

## 📱 Responsive Breakpoints

- **Desktop**: 1024px and above
- **Tablet**: 768px - 1024px
- **Mobile**: 320px - 768px
  - Small mobile: 480px and below
  - Extra small: 375px and below

## 🎨 Key Components

### Header
- **Topbar**: Contact information, dealership hours, and social media links
- **Navbar**: Main navigation with responsive hamburger menu on mobile

### Sections
- **Hero Section**: Main banner and call-to-action
- **Welcome Section**: Introduction and dealership information
- **Model Showroom**: Vehicle showcase
- **Quick Actions**: Quick access buttons for common tasks
- **Media Section**: Gallery and media content
- **Contact Section**: Contact form and information

## 🔧 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint for code quality |

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📝 Code Style

This project uses ESLint for maintaining code quality. Run linting with:

```bash
npm run lint
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is private and proprietary.

## 👥 Contact

For any questions or support, please contact the development team.

---

Built with ❤️ using React and Vite
