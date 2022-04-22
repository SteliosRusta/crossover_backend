const express = require('express');
const app = express();
require('dotenv').config();
const cors = require('cors');
const port = process.env.PORT || 5000;
// console.log(process.env);

const db = require('./db.js');

app.use(express.json());
app.use(cors({ origin: '*' }));

app.get('/', (req, res) => {
  res.send(`MongoDB Express app on port ${port}`);
});

app.use('*', (req, res) => res.sendStatus(404));

app.listen(port, (req, res) =>
  console.log(`server is running on port ${port}`)
);
