# 🏥 MediHealth

A full-stack medical healthcare web application built as a **Tools & Technologies for Internet Programming** academic project at IIUC. Built solo under time pressure, MediHealth provides a complete hospital/clinic web experience — from browsing doctors and services to booking appointments and submitting contact enquiries, with full user authentication.

---

## ✨ Features

- **Home page** — hero section, services overview, doctors section, reviews, health discoveries, and blog previews
- **User authentication** — register & login with bcrypt-hashed passwords and JWT session tokens
- **Appointment booking** — logged-in users can book appointments (saved to MongoDB)
- **Contact form** — authenticated users can submit enquiries (saved to MongoDB)
- **FAQ page** — anyone can submit a question (public endpoint, no login required)
- **Doctors page** — browse 21 doctors with department filtering and detailed cards
- **Services page** — medical services listed by department with sidebar navigation
- **Blog page** — health articles and discoveries
- **Dark / Light mode toggle** — theme switching across the entire app
- **Chatbox component** — interactive chat UI
- **Responsive design** — mobile-friendly via Tailwind CSS
- **Smooth animations** — Framer Motion transitions throughout

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Frontend | React 19, Vite, Tailwind CSS v4, DaisyUI |
| Routing | React Router DOM v7 |
| Animations | Framer Motion |
| Icons | React Icons, Lucide React |
| HTTP Client | Axios |
| Slider | Swiper.js |
| Backend | Node.js, Express 5 |
| Database | MongoDB Atlas (Mongoose) |
| Auth | JWT (jsonwebtoken), bcryptjs |
| Dev Server | Nodemon |

---

## 📁 Project Structure

```
medihealth/
├── index.html
├── vite.config.js
├── package.json
├── eslint.config.js
│
├── public/
│   └── vite.svg
│
├── src/
│   ├── main.jsx               # React entry point
│   ├── App.jsx                # Router — all page routes defined here
│   ├── App.css
│   ├── index.css
│   │
│   ├── layout/
│   │   └── MainLayout.jsx     # Navbar + Footer wrapper
│   │
│   ├── pages/
│   │   ├── Home.jsx           # Landing page
│   │   ├── Services.jsx       # Medical services
│   │   ├── Doctors.jsx        # Doctor listings + department filter
│   │   ├── Blog.jsx           # Health blog & discoveries
│   │   ├── Contact.jsx        # Contact form (auth required)
│   │   ├── FAQ.jsx            # FAQ + question submission
│   │   ├── Appointment.jsx    # Appointment booking (auth required)
│   │   └── Register.jsx       # Registration page
│   │
│   ├── components/
│   │   ├── navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── LoginForm.jsx
│   │   ├── DoctorCard.jsx
│   │   ├── DoctorCardDetails.jsx
│   │   ├── DoctorsSection.jsx
│   │   ├── ServiceCard.jsx
│   │   ├── ServiceItem.jsx
│   │   ├── ServiceList.jsx
│   │   ├── ServiceSection.jsx
│   │   ├── DepartmentSidebar.jsx
│   │   ├── BackgroundPattern.jsx
│   │   ├── PageTemplate.jsx
│   │   ├── Chatbox.jsx
│   │   └── ThemeToggle.jsx
│   │
│   ├── data/                  # Static data files (doctors, services, blogs)
│   │   ├── doctors.js
│   │   ├── doctorsData.js
│   │   ├── services.js
│   │   ├── servicesData.js
│   │   └── blogsData.js
│   │
│   └── assets/
│       └── img/               # All image assets
│
└── backend/
    ├── server.js              # Express server + all API routes
    ├── db.js                  # MongoDB connection
    ├── package.json
    ├── .env                   # Gitignored — use .env.example as template
    ├── .env.example           # Safe template to commit
    │
    ├── middleware/
    │   └── auth.js            # JWT auth middleware
    │
    └── models/
        ├── User.js
        ├── Appointment.js
        ├── Contact.js
        └── FAQQuestion.js
```

---

## ⚙️ Local Setup

### Prerequisites
- [Node.js](https://nodejs.org/) v18+
- [MongoDB Atlas](https://www.mongodb.com/atlas) account (free tier works)
- Git

---

### 1. Clone the repository
```bash
git clone https://github.com/Sam-Aves/MediHealth.git
cd medihealth
```

### 2. Install frontend dependencies
```bash
npm install
```

### 3. Install backend dependencies
```bash
cd backend
npm install
```

### 4. Configure environment variables
```bash
cp .env.example .env
```
Open `backend/.env` and fill in:
```
MONGO_URI=mongodb+srv://YOUR_USERNAME:YOUR_PASSWORD@cluster0.xxxxx.mongodb.net/medicareDB
JWT_SECRET=any_long_random_string
PORT=5000
```

### 5. Run the backend
```bash
# inside /backend
node server.js
# or with auto-reload:
npx nodemon server.js
```
You should see: `Backend running at http://localhost:5000`

### 6. Run the frontend
```bash
# back in root /medihealth
npm run dev
```
Open [http://localhost:5173](http://localhost:5173)

---

## 🔌 API Endpoints

| Method | Endpoint | Auth | Description |
|---|---|---|---|
| POST | `/api/register` | None | Register new user |
| POST | `/api/login` | None | Login, returns JWT token |
| POST | `/api/appointments` | JWT | Book an appointment |
| POST | `/api/contact` | JWT | Submit a contact message |
| POST | `/api/faq` | None | Submit a FAQ question |

---

## 🗄️ Database Models

**User** — `name`, `email`, `password` (bcrypt hashed)

**Appointment** — `user` (ref), `doctorName`, `department`, `date`, `time`, `message`

**Contact** — `user` (ref), `name`, `email`, `phone`, `subject`, `message`

**FAQQuestion** — `email` (optional), `question`, `submittedAt`

---

## ⚠️ Important Notes

- `backend/.env` is gitignored — never commit it. Use `.env.example` as the template.
- JWT tokens expire after 1 hour — users need to log in again after that.
- The frontend runs on port **5173** (Vite default), backend on port **5000**.
- Make sure both servers are running simultaneously for full functionality.

---

## 👤 Author

Built solo by **Asliraf** — Tools & Technologies for Internet Programming, 3rd Year  
[International Islamic University Chittagong (IIUC)](https://www.iiuc.ac.bd/)

GitHub: [@Sam-Aves](https://github.com/Sam-Aves)
