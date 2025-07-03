# 🎯 LMS App – Backend

This is the **backend server** for the LMS (Learning Management System) App. It provides RESTful APIs for user authentication, course management, video lectures, payments, and course progress tracking.

> ✅ Frontend Repo: [KamiDev-lab/lms-app-frontend](https://github.com/KamiDev-lab/lms-app-frontend)  
> 🌐 Live App: [lms-app-frontend.vercel.app](https://lms-app-frontend-17m8.vercel.app)

---

## ⚙️ Tech Stack

- **Node.js** with **Express.js**
- **MongoDB Atlas** with **Mongoose**
- **JWT Authentication** for secure login
- **Cloudinary** for media uploads (thumbnails, videos)
- **Stripe** for online payments
- **CORS** support for client-side access
- Deployed on **Replit**

---

## 📁 Folder Structure

lms-app-backend/
├── controllers/ # Route logic (users, courses, purchases)
├── middlewares/ # Auth, role-based checks, error handling
├── models/ # Mongoose schemas (User, Course, Lecture)
├── routes/ # Express API routes
├── utils/ # Cloudinary & token helpers
├── database/ # MongoDB connection logic
├── uploads/ # (optional - local storage)
├── .env # Environment configuration
└── index.js # App entry point

yaml
Copy
Edit

---

## 🔐 Environment Variables

Create a `.env` file in the root of the backend folder:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
STRIPE_SECRET_KEY=your_stripe_secret_key
🚀 Getting Started (Local Setup)
1. Clone the Repo
bash
Copy
Edit
git clone https://github.com/KamiDev-lab/lms-app-backend.git
cd lms-app-backend
2. Install Dependencies
bash
Copy
Edit
npm install
3. Run the Development Server
bash
Copy
Edit
npm run dev
The server will start on http://localhost:5000.

🧠 Key Features (Backend API)
✅ User Authentication & Roles
JWT-based login & registration

Middleware for route protection

Roles: Student, Instructor, Admin

📚 Course Management
Create, edit, delete, and publish/unpublish courses

Add video lectures and thumbnails via Cloudinary

Categorized course listing & filters

🎬 Lecture System
Add lectures to courses

Set lectures as previewable

Track lectures watched by users

💳 Payments via Stripe
Stripe checkout session creation

Store purchase history in MongoDB

Verify enrolled courses based on payment

🎓 Progress Tracking
Track lectures watched by users

Mark lecture as completed

Progress per enrolled course

📦 RESTful API Structure
Method	Route	Description
POST	/api/v1/user/register	Register user
POST	/api/v1/user/login	Login user
GET	/api/v1/course/published-courses	Get all published courses
POST	/api/v1/course/create	Create a new course
POST	/api/v1/media/upload	Upload media to Cloudinary
POST	/api/v1/purchase/checkout	Initiate Stripe payment
GET	/api/v1/progress/:courseId	Get course progress
PATCH	/api/v1/progress/mark-complete	Mark lecture complete

ℹ️ See route files in /routes/ for full list.

🧪 API Testing
Use tools like Postman or Thunder Client for local API testing.

📡 Deployment
Backend: Replit

Database: MongoDB Atlas

Media Uploads: Cloudinary

Payments: Stripe

📄 License
This project is licensed under the MIT License.

👨‍💻 Author
Syed Kamran Shah
📧 kamran.webdev1@gmail.com
🔗 GitHub
🔗 LinkedIn