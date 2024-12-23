import dotenv from "dotenv";
dotenv.config({ path: "./.env" });
import express from "express";
const cors = require("cors");

const app = express();
import cookieParser from "cookie-parser";

// Apply middleware first
app.use(express.json());
app.use(cookieParser());

//Cors setup
app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
    credentials: true,
  })
);

// Import routes after applying middleware
import userRouter from "./routes/user-routes";
import channelRouter from "./routes/channel-routes";

// Define routes after middleware
app.use("/api/v1/user", userRouter);
app.use("/api/v1/channel", channelRouter);

module.exports = app;
