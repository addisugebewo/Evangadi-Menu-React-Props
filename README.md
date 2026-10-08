# 🍽️ Evangadi Menu – React Props

This project is part of my **Evangadi Networks Full-Stack Web Development** learning journey.

It is a React-based food menu application created to practice **React components, props, reusable components, CSS Modules, and rendering data dynamically**.

## 📚 What I Practiced

In this project, I practiced:

* React functional components
* React Props
* Passing data from parent components to child components
* Reusable components
* Rendering data using `.map()`
* JavaScript arrays and objects
* CSS Modules
* Component-based project structure
* Vite
* JSX
* Importing and exporting components

## 🛠️ Technologies Used

* React
* JavaScript
* JSX
* CSS
* CSS Modules
* Vite
* Git & GitHub

## 📁 Project Structure

```text
react-props/
│
├── public/
│
├── src/
│   ├── assets/
│   │
│   ├── components/
│   │   ├── Header/
│   │   │   ├── Header.jsx
│   │   │   └── Header.module.css
│   │   │
│   │   ├── Footer/
│   │   │   ├── Footer.jsx
│   │   │   └── Footer.module.css
│   │   │
│   │   └── FristFood/
│   │       ├── FristFood.jsx
│   │       └── FristFood.module.css
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── ...
│
├── .gitignore
├── index.html
├── package.json
├── package-lock.json
└── vite.config.js
```

## 🚀 How to Run the Project

### 1. Clone the repository

```bash
git clone https://github.com/addisugebewo/Evangadi-Menu-React-Props.git
```

### 2. Open the project

```bash
cd Evangadi-Menu-React-Props
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

Then open the localhost URL shown in the terminal, usually:

```text
http://localhost:5173
```

## 🎯 Main Learning Goal

The main goal of this project was to understand how **React Props** work and how they can be used to pass information between components.

For example:

```jsx
<Fooditem
  title="Timatim Selata"
  category="Dinner"
/>
```

The child component can receive these values using props:

```jsx
function Fooditem(props) {
  return (
    <h2>{props.title}</h2>
  );
}
```

This makes the components more **reusable and organized**.

## 👨‍💻 Author

**Adisu Gebewo**

Computer Science Student | Full-Stack Web Development Learner

GitHub: [@addisugebewo](https://github.com/addisugebewo)

## 🎓 Learning Journey

This project was developed as part of my **Evangadi Networks Full-Stack Web Development** learning journey.

I am continuously learning and improving my skills in:

* HTML
* CSS
* Bootstrap
* JavaScript
* React
* Node.js
* Express.js
* MySQL
* Full-Stack Web Development

---

⭐ Thank you for visiting my project!
