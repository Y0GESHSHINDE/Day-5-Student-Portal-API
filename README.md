# 🎓 Student Portal API - Node.js, Express & MongoDB

Welcome to **Day 5** of my **10 Days of Node.js/Express/MongoDB** series!

This app is a mini student management system that allows users to **add students**, and **filter them by branch or year**. It demonstrates **MongoDB schema arrays**, **query filtering**, and proper **RESTful routing** with Express.

---

## 🚀 Features

- ➕ Add students with name, roll number, branch, year, and subjects
- 🔍 Filter students by branch or year
- 📚 Store array of subjects per student
- ⚡ Fast and simple RESTful API structure

---

## 🧠 Technologies Used

- Node.js
- Express.js
- MongoDB + Mongoose
- dotenv

---

## 📁 Folder Structure

```
student-portal-api/
├── config/
│   └── db.js
├── controllers/
│   └── studentController.js
├── models/
│   └── Student.js
├── routes/
│   └── studentRoutes.js
├── .env
├── server.js
├── package.json
└── README.md
```

---

## 📦 Installation & Setup

1. **Clone the repo**
```bash
git clone https://github.com/Y0GESHSHINDE/Day-5-Student-Portal-API.git
cd Day-5-Student-Portal-API
```

2. **Install dependencies**
```bash
npm install
```

3. **Create a `.env` file**
```
MONGO_URI=mongodb://127.0.0.1:27017/studentDB
PORT=5000
```

4. **Start the server**
```bash
npm run dev
```

App runs at:  
👉 `http://localhost:5000`

---

## 📬 API Endpoints

### 👨‍🎓 Student Routes

| Method | Endpoint                | Description                          |
|--------|-------------------------|--------------------------------------|
| POST   | `/api/students/add`     | Add a new student                    |
| GET    | `/api/students`         | Get all students (optional filters)  |

---

## 🔍 Query Filters

You can pass optional query parameters:
- `/api/students?branch=ENTC`
- `/api/students?year=3`
- `/api/students?branch=ENTC&year=3`

---

## 🧪 Sample JSON

**Add Student**
```json
{
  "name": "Yogesh Shinde",
  "rollNo": "ET123",
  "branch": "ENTC",
  "year": 3,
  "subjects": ["DSA", "IoT", "AI"]
}
```

---

## 🧠 Learning Goal

This project shows how to work with:
- Array fields in Mongoose schemas
- Filtering data with query parameters
- Building modular Express APIs

---

## 👨‍💻 Author

**Yogesh Shinde**  
📧 yogeshshinde3624@gmail.com  
🔗 [LinkedIn](https://linkedin.com/in/y0geshshinde)  
🐙 [GitHub](https://github.com/y0geshshinde)

---
