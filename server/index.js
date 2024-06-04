import express, { json } from "express";
import dotenv from "dotenv";
dotenv.config();

const app = express();
const port = import.meta.env.VITE_MONGO_URI;
console.log(port);

import { connect } from "mongoose";

// allows tha parsing of request body as json
app.use(json());

// database connection
connect(port)
  .then(() => {
    console.log("Database connected successfully");
  })
  .catch((error) => {
    console.log("Database Error", error);
  });

app.use((err, req, res) => {
  const errorMsg = err ? err.toString() : "Something went wrong";
  res.status(500).json({ msg: errorMsg });
});

app.listen(9000, () => {
  console.log(`Appilcation is running at port 9000`);
});
