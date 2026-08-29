// require('dotenv').config();
// const express = require("express");
// const connectDB = require("./db");
// const app = express();
// app.use(express.json());
// connectDB();


// app.listen(process.env.PORT, () => {
//     console.log(`Server is running on port ${process.env.PORT}`);
// });

// 
require("dotenv").config();
const express = require("express");
const connectDB = require("./db");

const User = require("./models/user");

const app = express();

app.use(express.json());

connectDB();


// POST
app.post("/users", async (req, res) => {
  try {
    const user = await User.create(req.body);

    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});


// GET
app.get("/users", async (req, res) => {
  try {
    const users = await User.find();

    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});


app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});