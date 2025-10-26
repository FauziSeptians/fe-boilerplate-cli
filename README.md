# FE Boilerplate CLI

> 🚀 A powerful CLI tool to quickly scaffold frontend projects and generate code components

## ✨ Features

- 📦 **Quick Project Setup** - Create a new frontend project in seconds
- 🎨 **Code Generators** - Generate routes, pages, and components with consistent structure
- 🔥 **TypeScript Support** - All generated files use TypeScript (`.tsx`)
- 💅 **Best Practices** - Follows modern React and Next.js conventions
- 🎯 **Flexible** - Customizable paths and naming conventions
- ⚡ **Fast & Lightweight** - Minimal dependencies, maximum efficiency

---

## 📦 Installation

### Global Installation (Must)

```bash
npm install -g fe-boilerplate-cli
```

---

## 🚀 Quick Start

### 1. Create a New Project

```bash
# Using global installation
fe-boilerplate-cli my-app

# Using npx
npx fe-boilerplate-cli my-app
```

### 2. Navigate to Your Project

```bash
cd my-app
npm install
npm run dev
```

### 3. Generate Code

```bash
# Generate a route
fe-boilerplate-cli g r about

# Generate a page
fe-boilerplate-cli g p home
```

---

## 📖 Commands

### Create Project

```bash
fe-boilerplate-cli [project-name]
```

Creates a new frontend project from the boilerplate template.

**Example:**
```bash
fe-boilerplate-cli my-awesome-app
```

If you don't provide a project name, you'll be prompted to enter one.

---

### Generate Code

```bash
fe-boilerplate-cli generate <type> [name]
# or use the alias
fe-boilerplate-cli g <type> [name]
```

Generate different types of code files with consistent structure.

---

## 🎨 Generators

### Routes Generator

Generate route components in `src/app/` directory (Next.js App Router style).

**Aliases:** `routes`, `route`, `r`

```bash
fe-boilerplate-cli g r about
fe-boilerplate-cli generate route contact
fe-boilerplate-cli g routes dashboard
```

**Output:**
```
src/app/about/About.tsx
```

**Generated File Structure:**
```tsx
import React from 'react';

export default function About() {
  return (
    <div>
      <h1>About Page</h1>
      <p>Welcome to About!</p>
    </div>
  );
}
```

---

### Pages Generator

Generate page components in `src/pages/` directory with "Page" suffix.

**Aliases:** `pages`, `page`, `p`

```bash
fe-boilerplate-cli g p home
fe-boilerplate-cli generate page dashboard
fe-boilerplate-cli g pages settings
```

**Output:**
```
src/pages/HomePage.tsx
```

**Generated File Structure:**
```tsx
import React from 'react';

export default function HomePage() {
  return (
    <div>
      <h1>HomePage Page</h1>
      <p>Welcome to HomePage!</p>
    </div>
  );
}
```

---


## 💡 Examples

### Basic Usage

```bash
# Create new project
fe-boilerplate-cli my-app
cd my-app

# Generate routes
fe-boilerplate-cli g r about
fe-boilerplate-cli g r contact
fe-boilerplate-cli g r blog

# Generate pages
fe-boilerplate-cli g p home
fe-boilerplate-cli g p dashboard
```
---

### Multi-word Names

```bash
# Kebab-case (recommended)
fe-boilerplate-cli g r contact-us      # → ContactUs.tsx
fe-boilerplate-cli g p user-profile    # → UserProfilePage.tsx

# Space-separated (will be converted to kebab-case)
fe-boilerplate-cli g r "about us"      # → AboutUs.tsx
fe-boilerplate-cli g p "my settings"   # → MySettingsPage.tsx
```

---

## 📂 Project Structure

After creating a project and generating code, your structure will look like:

```
my-app/
├── src/
│   ├── app/                    # Routes (Next.js App Router)
│   │   ├── about/
│   │   │   └── About.tsx
│   │   ├── contact/
│   │   │   └── Contact.tsx
│   │   └── blog/
│   │       └── Blog.tsx
│   │
│   └── pages/                  # Pages (Traditional routing)
│       ├── HomePage.tsx
│       ├── DashboardPage.tsx
│       └── SettingsPage.tsx
│
├── package.json
└── ...
```

---

## 🆘 Help

Get help anytime with the `--help` flag:

```bash
# Root help
fe-boilerplate-cli --help

# Generator help
fe-boilerplate-cli generate --help
fe-boilerplate-cli g --help
```

---

## 🎯 Generator Comparison

| Generator | Aliases | Output Path | Naming Convention | Use Case |
|-----------|---------|-------------|-------------------|----------|
| **Routes** | `routes`, `route`, `r` | `src/app/{name}/{Name}.tsx` | PascalCase | Next.js App Router |
| **Pages** | `pages`, `page`, `p` | `src/pages/{Name}Page.tsx` | PascalCase + "Page" | Traditional routing |

---

## 📊 Version History

### v1.0.0 (Current)
- ✨ Initial release
- 📦 Project scaffolding
- 🎨 Route generator
- 📄 Page generator
- 💅 TypeScript support
