# PedPost 🖋️

A modern, minimalist blog application built with **Node.js**, **Express**, and **EJS**.  
PedPost lets users create, view, edit, and delete blog posts through a clean, responsive interface.

---

## ✨ Features

- 🎨 **Ped & Post Branding** – Custom logo and sleek minimalist design  
- ✍️ **Publisher Tracking** – Every post shows the author's name  
- 📝 **CRUD Functionality** – Create, Read, Update, and Delete posts  
- ⚡ **In-Memory Storage** – Lightweight and fast *(data resets when server restarts)*  
- 📱 **Responsive UI** – Optimized for mobile, tablet, and desktop  

---

## 🛠️ Tech Stack

| Layer | Technology |
|------|------------|
| Backend | Node.js, Express.js |
| Frontend | EJS |
| Styling | Custom CSS3 |
| Fonts | Inter, Playfair Display |
| Middleware | Method-Override, Express URL Encoded |

---

## 📦 Installation & Setup

### Clone the repository

```bash
git clone https://github.com/YOUR_USERNAME/PedPost-Blog-App.git
cd PedPost-Blog-App
npm install
node app.js
````

Open your browser and visit:

```bash
http://localhost:3000
```

---

## 📁 Project Structure

```text
PedPost-Blog-App/
│── public/
│   └── css/
│       └── style.css
│
│── views/
│   ├── partials/
│   ├── index.ejs
│   ├── new.ejs
│   ├── edit.ejs
│   └── show.ejs
│
│── app.js
│── package.json
│── README.md
```

---

## ⚠️ Note

This project uses **in-memory storage**, meaning all posts are lost when the server restarts.
For production use, connect a database such as:

* MongoDB
* PostgreSQL
* MySQL

---

## 🚀 Future Improvements

* User authentication
* Rich text editor
* Image uploads
* Persistent database storage
* Search and category filters
* Dark mode

---

## 👨‍💻 Author

Designed & developed by **Pedram Oskouian**

---

## 📜 License

This project is open-source and available under the **MIT License**.

```
```
