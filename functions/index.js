import { onRequest } from "firebase-functions/vs/https";
import logger from "firebase-functions/logger";
import express from "express";
import cors from "cors";
import { getExerciseList, addNewExercise, updateExerciseById } from "./src/exerciseDb.js";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/test", (req,res) => res.send("this is working"));

app.get("/exercise", getExerciseList);
app.post("/exercise", addNewExercise);
app.patch("/exercise/:exerciseId", updateExerciseById);

const {onRequest} = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");

export const api = onRequest(app)
