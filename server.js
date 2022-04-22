import express from "express";
import cors from "cors";
const app = express();

const port = process.env.PORT || 5000;

app.use(express.json());
app.use(cors({ origin: "*" }));

app.use("*", (req, res) => res.sendStatus(404));

app.listen(port, (req, res) =>
  console.log(`server is running on port ${port}`)
);
