
# 🏫 CEG_GRAM

*A Mobile Application for Clubs and Event Management at CEG, Anna University*

---

## 📖 Overview

**CEG_GRAM** is a **full-stack mobile application** designed to streamline **club registration, event management, and user participation** at the **College of Engineering, Guindy (CEG)**.

The platform enables **students, admins, and master users** to interact through a unified portal:

* Students can **join clubs**, view **events**, and **share feedback**.
* Admins can **manage clubs**, activate/deactivate events, and monitor users.
* The Master user oversees **system-wide control**, ensuring smooth coordination.

CEG_GRAM bridges the communication gap between students and administrators while providing a digital interface for institutional events and clubs.

---

## 🧠 System Architecture

The project follows a **client–server model** with a clear separation between frontend (React) and backend (Django).

### **Main Components**

* **Frontend:** React JS
* **Backend:** Django (Python)
* **Database:** SQLite (default Django DB)

### **Modules**

#### 👤 **User Module**

* User registration and login
* View available clubs and sub-clubs
* Join or leave clubs
* View club details and upcoming events
* Manage profile and logout

#### 🧑‍💼 **Admin Module**

* Manage clubs, sub-clubs, and members
* Approve or deactivate club activities
* Handle event uploads and announcements

#### 👑 **Master Module**

* Master login and authentication
* View all active/inactive users and clubs
* Control activation status of entities

---

## 📁 Project Structure

```
CEG_GRAM/
│
├── backend/                           # Django Backend
│   ├── db.sqlite3                     # SQLite database
│   ├── manage.py                      # Django management script
│   ├── ProApp/                        # Main Django project settings
│   │   ├── settings.py                # Configuration (DB, apps, etc.)
│   │   ├── urls.py                    # Root URL routes
│   │   ├── wsgi.py / asgi.py          # Deployment entry points
│   │   └── schema.py                  # Optional GraphQL or schema logic
│   ├── product/                       # Django app for club/product logic
│   │   ├── models.py                  # Data models
│   │   ├── views.py                   # API views
│   │   ├── admin.py                   # Django admin registration
│   │   ├── schema.py                  # GraphQL or serializers
│   │   └── migrations/                # Database migrations
│   ├── requirements.txt               # Backend dependencies
│   └── venv/                          # Virtual environment
│
└── fend_ceg/                          # React Frontend
    ├── App.js                         # Main app entry
    ├── assets/                        # Images and icons
    ├── components/                    # Reusable UI components
    ├── SRC/
    │   ├── Master/                    # Master-specific screens
    │   │   ├── MasterLogin.js
    │   │   ├── MasterActive.js
    │   │   ├── MasterInactive.js
    │   │   └── ActiveInactive.js
    │   ├── user/                      # User-specific screens
    │   │   ├── UserLogin.js
    │   │   ├── UserHomePage.js
    │   │   ├── UserAllClubs.js
    │   │   ├── UserSubClubs.js
    │   │   └── UserSubClubDescription.js
    │   ├── AllLogin.js
    │   └── Logout.js
    ├── styles/                        # Styling logic
    ├── package.json                   # Frontend dependencies
    ├── package-lock.json
    ├── babel.config.js
    └── app.json
```

---

## ⚙️ Tools & Technologies

| 🧩 Category          | 🛠️ Tool / Framework                                                                     | 💡 Description                                        |
| -------------------- | ---------------------------------------------------------------------------------------- | ----------------------------------------------------- |
| **Frontend**         | [React JS](https://react.dev/)                                                           | JavaScript library for building user interfaces       |
| **Backend**          | [Django](https://www.djangoproject.com/)                                                 | High-level Python web framework for rapid development |
| **Database**         | [SQLite](https://www.sqlite.org/)                                                        | Lightweight, serverless SQL database used by Django   |
| **Language**         | Python & JavaScript                                                                      | Core programming languages                            |
| **IDE / Editors**    | [VS Code](https://code.visualstudio.com/), [PyCharm](https://www.jetbrains.com/pycharm/) | For frontend and backend development                  |
| **Package Managers** | [pip](https://pypi.org/project/pip/), [npm](https://www.npmjs.com/)                      | Manage dependencies for Python and JS                 |

---

## 🚀 Installation & Setup

### **1️⃣ Backend Setup**

```bash
cd CEG_GRAM/backend
python -m venv venv           # Create virtual environment
source venv/bin/activate      # Activate environment
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver
```

Your backend will start at:

```
http://127.0.0.1:8000
```

---

### **2️⃣ Frontend Setup**

```bash
cd CEG_GRAM/fend_ceg
npm install
npm start
```

React app runs at:

```
http://localhost:3000
```

---

## 📱 Key Features

✅ Role-based authentication (User, Admin, Master)
✅ Club and sub-club management system
✅ Dynamic event display and participation
✅ Status-based activation and deactivation control
✅ User-friendly interface with structured navigation
✅ Secure backend with Django ORM
✅ Real-time communication via REST APIs

---

## 🌱 Future Enhancements

🚀 **Event Calendar Integration:** Add timeline and reminders for upcoming events.
💬 **Messaging System:** Enable direct communication between users and admins.
📊 **Analytics Dashboard:** For tracking participation statistics.
📎 **File Upload System:** Allow admins to upload posters or event materials.

---

## 📚 References

* Django and React official documentation
* “Django for Professionals” by William S. Vincent
* “Full-Stack React Projects” by Shama Hoque
* CEG institutional workflow and event management system

---

## 🪄 License

This project is open for **educational and institutional use**.
Attribution to the developers is appreciated when reused or adapted.

---

> *“Connecting CEG clubs, empowering students, and simplifying management — all in one platform!”* 
