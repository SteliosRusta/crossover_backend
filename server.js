import express from "express";
import cors from "cors";
import authRouter from "./routes/authRouter.js";
import "./db.js";

const app = express();

const port = process.env.PORT || 5000;

app.use(express.json());
app.use(cors({ origin: "*" }));

app.use("/auth", authRouter);

app.get("/", (req, res) => {
  res.send(`MongoDB Express app on port ${port}`);
});

app.use("*", (req, res) => res.sendStatus(404));

app.listen(port, (req, res) =>
  console.log(`server is running on port ${port}`)
);
