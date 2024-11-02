import express, { Application } from "express";
import dbConnect from "./config/dbConnect";

const app: Application = express();

dbConnect();

export default app;
