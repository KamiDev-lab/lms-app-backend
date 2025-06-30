import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import connectDB from "../database/db.js"; // note: path may change based on your file structure
import userRoute from "../routes/user.route.js";
import courseRoute from "../routes/course.route.js";
import mediaRoute from "../routes/media.route.js";
import purchaseRoute from "../routes/purchaseCourse.route.js";
import courseProgressRoute from "../routes/courseProgress.route.js";

// Load env vars (optional on Vercel if using dashboard instead)
dotenv.config();

// Connect to DB
await connectDB(); // use await if connectDB returns a promise

const app = express();

// Middleware
app.use(express.json());
app.use(cookieParser());
app.use(cors({
  origin: "https://lms-app-frontend-17m8.vercel.app",
  credentials: true
}));

// API routes
app.use("/api/v1/media", mediaRoute);
app.use("/api/v1/user", userRoute);
app.use("/api/v1/course", courseRoute);
app.use("/api/v1/purchase", purchaseRoute);
app.use("/api/v1/progress", courseProgressRoute);


export default app;
