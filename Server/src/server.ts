import dotenv from "dotenv";
dotenv.config();

import express, { Application, Request, Response } from "express";
const app: Application = express();
import debug from "debug";
const log = debug("app:server");

const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req: Request, res: Response) => {
  res.send("Hello, From the Server");
});

app.listen(PORT, () => {
  log(`Server running on port ${PORT}`);
});
