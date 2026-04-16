# 🎬 Movie Tracker API (Letterboxd Inspired)

A full-stack web application where users can track movies they watched, give ratings & reviews, with secure authentication and role-based access.

---

## 🚀 Features

### 🔐 Authentication
- User Registration
- User Login
- Password hashing using bcrypt
- JWT-based authentication

### 👤 Role-Based Access
- **User**
  - Add movies
  - View their movies
  - Update rating & review
  - Delete their movies

- **Admin**
  - View all users
  - View all movies
  - Cannot modify IMDB data (read-only access)

---

## 🧱 Tech Stack

### Backend
- Node.js
- Express.js
- MongoDB (Mongoose)
- JWT Authentication

### Frontend
- React.js
- CSS Modules

---

## 📦 Project Structure
server/
├── config/
├── controllers/
├── middleware/
├── model/
├── routers/
├── utils/
└── index.js

client/
├── src/
│ ├── Components/
│ ├── pages/
│ ├── services/
│ ├── utils/
│ └── App.jsx



---

## ⚙️ Setup Instructions

### 1️⃣ Clone the Repository

```bash
git clone <your-repo-link>
cd project-folder

cd server
npm install

PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET="SECRET_KEY"

Run backend:
nodemon index.js

Frontend Setup
cd client
npm install
npm run dev

🔑 Authentication Flow
User logs in → receives JWT token
Token is stored in localStorage
Every protected request sends token:
Authorization: Bearer <token>
Backend verifies token using middleware
👑 Admin Role (IMPORTANT)

There is NO separate admin registration API.

🔹 How to Create Admin
Register a normal user using signup
Open MongoDB (Compass)
Go to users collection
Update role manually:
{
  "role": "admin"
}
🔹 How Admin Works
JWT token contains user details
Backend checks role:
if (user.role !== "admin") {
    return res.status(403).json({ message: "Unauthorized" });
}
🔹 Admin Permissions
Can view all users
Can view all movies
Cannot modify IMDB movie data


-> As a truth I written Backend Code fully, and used AI for frontend.
