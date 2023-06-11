import express from "express";
import dotenv from 'dotenv';

import connectDB from "./config/db.js";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";

import userRoutes from "./routes/userRoutes.js";

dotenv.config()
const port = process.env.PORT || 5000;

// connect DB
connectDB()

// Instacialise app
const app = express();

app.use("/api/users", userRoutes);
app.get('/', (req, res) => res.send('Transform'))

app.use(notFound);
app.use(errorHandler);

app.listen(port, () => console.log(`Tranformer on ${port} `))