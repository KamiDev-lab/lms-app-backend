const express = require("express");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const connectDB = require("./database/db");

const userRoute = require("./routes/user.route");
const courseRoute = require("./routes/course.route");
const mediaRoute = require("./routes/media.route");
const purchaseRoute = require("./routes/purchaseCourse.route");
const courseProgressRoute = require("./routes/courseProgress.route");

// Load environment variables
dotenv.config();

// Connect to database
connectDB();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(cookieParser());

app.use(cors({
  origin: "https://lms-app-frontend-17m8.vercel.app/",
  credentials: true
}));

// Root route
app.get("/", (req, res) => {
  res.json({
    message: "LMS API Server is running!",
    version: "1.0.0",
    endpoints: {
      users: "/api/v1/user",
      courses: "/api/v1/course", 
      media: "/api/v1/media",
      purchases: "/api/v1/purchase",
      progress: "/api/v1/progress"
    }
  });
});

// API routes
app.use("/api/v1/media", mediaRoute);
app.use("/api/v1/user", userRoute);
app.use("/api/v1/course", courseRoute);
app.use("/api/v1/purchase", purchaseRoute);
app.use("/api/v1/progress", courseProgressRoute);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});