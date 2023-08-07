import express from "express";
import userRouter from "./routers/userRouter.js";
import cors from 'cors';
import bodyParser from "body-parser";

const app = express();

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use("/api/v1", userRouter)


export default app;