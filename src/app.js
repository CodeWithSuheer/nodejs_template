import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

app.use(cors({
    origin: [process.env.FRONTEND_URL],
    credentials: true
}));

app.use(express.json({ limit: "20kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));
app.use(cookieParser());


// routes import
import { curdRouter } from "./routes/crudRoutes.js";

// routes declaration
app.use("/api/v1/crud", curdRouter);


export { app };