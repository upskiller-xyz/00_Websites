# 00_Websites

Professional websites and tools built with React, TypeScript, and modern web technologies.

## 🌟 What's in this repository

- **Upskiller** - Main company website with scrolling sections
- **Shared Components** - Reusable UI components across projects
- **Modern Tech Stack** - React, TypeScript, Tailwind CSS, Vite

---

## 🚀 Getting Started (Complete Guide for New Developers)

Follow these step-by-step instructions to set up the development environment on your machine.

### 📋 Prerequisites

Before you begin, make sure you have:
- A computer running macOS, Windows, or Linux
- Internet connection
- Basic familiarity with using the terminal/command line

---

### 🔧 Step 1: Install Node.js and npm

Node.js is the runtime that allows us to run JavaScript outside the browser. npm is the package manager that installs our dependencies.

#### Option A: Using Node Version Manager (nvm) - **Recommended**

**For macOS/Linux:**
```bash
# Install nvm
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.3/install.sh | bash

# Restart your terminal or run this command
source ~/.bashrc

# Install the latest stable Node.js
nvm install 24
nvm use 24

# Verify installation
node -v    # Should show v24.x.x
npm -v     # Should show 10.x.x or higher
```

**For Windows:**
```bash
# Download and install nvm-windows from:
# https://github.com/coreybutler/nvm-windows/releases

# Then in Command Prompt or PowerShell:
nvm install 24.3.0
nvm use 24.3.0

# Verify installation
node -v
npm -v
```

#### Option B: Direct Installation
Download from [nodejs.org](https://nodejs.org/) and install the LTS version.

---

### 🔧 Step 2: Install Git (if not already installed)

Git is our version control system.

**Check if Git is installed:**
```bash
git --version
```

**If not installed:**
- **macOS**: Install Xcode Command Line Tools: `xcode-select --install`
- **Windows**: Download from [git-scm.com](https://git-scm.com/download/win)
- **Linux**: `sudo apt install git` (Ubuntu/Debian) or `sudo yum install git` (CentOS/RHEL)

---

### 🔧 Step 3: Install a Code Editor

We recommend **Visual Studio Code** with these extensions:

1. **Download VS Code**: [code.visualstudio.com](https://code.visualstudio.com/)

2. **Install these extensions** (search in VS Code's Extensions panel):
   - **ES7+ React/Redux/React-Native snippets**
   - **TypeScript Importer**
   - **Tailwind CSS IntelliSense**
   - **Prettier - Code formatter**
   - **ESLint**
   - **Auto Rename Tag**
   - **Bracket Pair Colorizer**

---

### 📂 Step 4: Clone the Repository

Open your terminal and navigate to where you want to store the project:

```bash
# Navigate to your desired directory (e.g., Desktop)
cd ~/Desktop

# Clone the repository
git clone https://github.com/upskiller-xyz/00_Websites.git

# Navigate into the project
cd 00_Websites
```

---

### 📦 Step 5: Install Project Dependencies

Navigate to the project you want to work on and install dependencies:

```bash
# For the main Upskiller website
cd upskiller

# Install all dependencies (this may take a few minutes)
npm install
```

**What this does:**
- Downloads all the packages listed in `package.json`
- Creates a `node_modules` folder with dependencies
- Creates a `package-lock.json` file to lock dependency versions

---

### 🏃‍♂️ Step 6: Start the Development Server

```bash
# Start the development server
npm run dev
```

**You should see output like:**
```
  VITE v5.4.19  ready in 543ms

  ➜  Local:   http://localhost:5175/
  ➜  Network: use --host to expose
```

🎉 **Success!** Open your browser and go to `http://localhost:5175/` to see the website.

---

## 🛠️ Available Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Check code quality |

---

## 📁 Project Structure

```
00_Websites/
├── shared/                     # Shared components across projects
│   ├── components/
│   │   └── SharedButton.tsx   # Reusable button component
│   └── styles/
│       └── shared.css         # Shared styles
├── upskiller/                 # Main company website
│   ├── src/
│   │   ├── components/        # React components
│   │   ├── styles/           # CSS styles
│   │   ├── App.tsx           # Main app component
│   │   └── main.tsx          # Entry point
│   ├── public/               # Static assets
│   ├── index.html           # HTML template
│   ├── package.json         # Dependencies and scripts
│   └── vite.config.ts       # Build configuration
├── tool-website-01/           # First tool/product website (coming soon)
│   ├── src/                  # React components and logic
│   ├── public/               # Static assets
│   ├── index.html           # HTML template
│   ├── package.json         # Dependencies and scripts
│   └── vite.config.ts       # Build configuration
├── [future-websites]/         # Additional websites will be added here
└── README.md                 # This documentation
```

---

## 🎨 Technology Stack

### **Frontend Framework**
- **React 18** - Component-based UI library
- **TypeScript** - Type-safe JavaScript
- **Vite** - Fast build tool and dev server

### **Styling**
- **Tailwind CSS** - Utility-first CSS framework
- **PostCSS** - CSS processing tool

### **Development Tools**
- **ESLint** - Code linting
- **Prettier** - Code formatting
- **Git** - Version control

---

## 🔄 Development Workflow

### 1. **Before You Start Working**
```bash
# Make sure you have the latest changes
git pull origin main

# Install any new dependencies
npm install
```

### 2. **While Working**
```bash
# Start the development server
npm run dev

# Your changes will automatically reload in the browser
```

### 3. **Before Committing**
```bash
# Check your code for issues
npm run lint

# Build to make sure everything works
npm run build
```

### 4. **Committing Changes**
```bash
# Add your changes
git add .

# Commit with a descriptive message
git commit -m "feat: add new hero section animation"

# Push to GitHub
git push
```

---

## 🆘 Common Issues and Solutions

### **"npm: command not found"**
- Node.js is not installed or not in your PATH
- Reinstall Node.js or restart your terminal

### **"Permission denied" errors**
```bash
# Fix npm permissions (macOS/Linux)
sudo chown -R $(whoami) ~/.npm
```

### **Port 5175 is already in use**
- Another process is using the port
- Kill the process or Vite will automatically use a different port

### **"Module not found" errors**
```bash
# Delete node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

### **TypeScript errors**
- Check the file paths in import statements
- Make sure you're importing React components correctly
- Verify TypeScript configuration in `tsconfig.json`

---

## 🤝 Contributing Guidelines

1. **Create a new branch** for your feature:
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **Make your changes** and test thoroughly

3. **Commit your changes** with clear messages:
   ```bash
   git commit -m "feat: add contact form validation"
   ```

4. **Push and create a Pull Request**:
   ```bash
   git push origin feature/your-feature-name
   ```

---

## 📚 Learning Resources

### **React & TypeScript**
- [React Official Tutorial](https://react.dev/learn)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [React TypeScript Cheatsheet](https://react-typescript-cheatsheet.netlify.app/)

### **Tailwind CSS**
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Tailwind UI Components](https://tailwindui.com/components)

### **General Web Development**
- [MDN Web Docs](https://developer.mozilla.org/) - Comprehensive web development reference
- [JavaScript.info](https://javascript.info/) - Modern JavaScript tutorial

---

## 🆘 Getting Help

If you're stuck:

1. **Check this README** - Most common issues are covered here
2. **Ask in our team chat** - Don't hesitate to ask questions!
3. **Google the error message** - Often others have faced the same issue
4. **Check the official documentation** for the technology you're using

---

## 📞 Contact

For questions about this project, reach out to the development team.

Happy coding! 🚀
