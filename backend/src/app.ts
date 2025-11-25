import "express-async-errors";
import express, { Application, json } from "express";
import cors from "cors"

const app: Application = express();

app.use(cors())
app.use(json());
app.use(express.urlencoded({ extended: true }))

app.get("/", (req, res) => {
  res.send("API is running222, uhulll 🚀");
});

export default app;
