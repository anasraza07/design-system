# 🧩 UI Components Library

This project is a simple and accessible UI component library built with **React**, **TypeScript**, and **TailwindCSS**.  
It demonstrates strong focus on **design systems**, **component architecture**, **accessibility**, **responsiveness**, and **clear documentation**.

---

## 🚀 Components

- **Badge**  
  A small label component that can display statuses with different variants and sizes.

- **Navbar**  
  A flexible and responsive navigation bar with customizable alignment and color variants.

---

## 🛠️ Tech Stack

- React
- TypeScript
- TailwindCSS
- Storybook (for UI documentation and component previews)

---

## 📸 Storybook Screenshots

You can preview all components with different props using **Storybook**.

| Badge Examples | Navbar Examples |
|:--------------:|:---------------:|
| ![Badge Example](./screenshots/badge.png) | ![Navbar Example](./screenshots/navbar.png) |

---

## 📦 Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/your-repo-name.git
   cd your-repo-name

# 📦 Install dependencies

```bash
npm install
```

# 🚀 Start the Storybook server

```bash
npm run storybook
```

---

# 🧩 Usage

### Example usage of the **Badge** component:

```tsx
import Badge from "./components/Badge";

function App() {
  return (
    <Badge label="New" variant="success" size="small" />
  );
}
```

---

### Example usage of the **Navbar** component:

```tsx
import Navbar from "./components/Navbar";

function App() {
  return (
    <Navbar
      variant="primary"
      orientation="center"
      links={[
        { label: "Home", href: "/" },
        { label: "Services", href: "/services" },
        { label: "Contact", href: "/contact" },
      ]}
    />
  );
}
```

---

# 📖 Documentation

Each component is fully documented using **Storybook**.

This includes:

- Clear prop tables
- Variants and customization examples
- Accessibility considerations
- Responsive behavior

Components are built following best practices for:

- ✅ Design System consistency
- ✅ Accessibility (ARIA roles)
- ✅ Responsive layouts
- ✅ Reusability and scalability

---

# 📸 Screenshots

Preview of components inside Storybook:

| Badge Component | Navbar Component |
|:---------------:|:----------------:|
| ![Badge Screenshot](./screenshots/badge.png) | ![Navbar Screenshot](./screenshots/navbar.png) |

---

# 📬 Feedback

Have any ideas to improve this project?  
Feel free to open issues or pull requests!

---
