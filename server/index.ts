import "dotenv/config";

import express from "express";
import cors from "cors";
import indexRouter from "./src/routes/_index";

import { frontendUrl } from "./config";
import mongoose from "mongoose";

const PORT = Number(process.env.PORT) || 9000;
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost:27017";

const app = express();

app.use(cors()) //({ origin: frontendUrl }));
app.use(express.json());

app.use("/", indexRouter);

mongoose
  .connect(MONGODB_URI)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`server listening on port ${PORT}`);
    });
  })
  .catch((err) => console.error(err));
