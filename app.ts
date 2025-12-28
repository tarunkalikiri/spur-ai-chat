import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import router from "./routes";
import { initDB } from "./db";

dotenv.config();

async function start() {
  await initDB();

  const app = express();
  app.use(cors());
  app.use(express.json());
  app.use(router);

  app.listen(5000, () => {
    console.log("Server running on http://localhost:5000");
  });
}

start();
