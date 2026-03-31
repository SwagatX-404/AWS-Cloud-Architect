## FRONTEND - TASK MANAGEMENT MICROSERVICE

### DESCRIPTION

This is a frontend application for a Task Management system built using React and Vite.
It follows a microservices architecture where the frontend communicates with backend services via REST APIs.

The UI is designed using Tailwind CSS and Material UI to provide a modern and responsive user experience.

---

### TECH STACK

* React (Vite)
* Tailwind CSS (v3)
* Material UI (MUI)
* Axios
* Redux Toolkit (optional)

---

### PROJECT STRUCTURE

```id="kq3w3g"
src/
│-- components/
│    │-- ui/
│    │-- layout/
│
│-- pages/
│
│-- services/
│
│-- redux/
│
│-- assets/
│
│-- App.jsx
│-- main.jsx
```

---

### INSTALLATION & SETUP

#### 1. Clone Repository

```id="b4i2wx"
git clone https://github.com/SwagatX-404/AWS-Cloud-Architect.git
cd task-management-ui
```

#### 2. Install Dependencies

```id="2hql9u"
npm install
```

#### 3. Run Application

```id="pj8j5q"
npm run dev
```

#### 4. Open in Browser

```id="6ydzlw"
http://localhost:5173/
```

---

### FEATURES

* Create Task
* Update Task
* Delete Task
* View Task List
* Filter and Search Tasks
* Responsive UI

---

### API ENDPOINTS (USED)

```id="db82j3"
GET     /api/tasks
POST    /api/tasks
PUT     /api/tasks/:id
DELETE  /api/tasks/:id
```

---

### ENVIRONMENT VARIABLES

Create a `.env` file in the root directory:

```id="mps2kf"
VITE_API_BASE_URL=http://localhost:5000
```

---

### SCRIPTS

```id="a9w2hs"
npm run dev
npm run build
npm run preview
```

---

### FUTURE ENHANCEMENTS

* Authentication (JWT)
* Dashboard with analytics
* Role-based access
* Deployment (AWS / Vercel)
* Testing (Unit / Integration)

---

### AUTHOR

Swagat Murmu
GitHub: https://github.com/SwagatX-404

---

### LICENSE

MIT License
