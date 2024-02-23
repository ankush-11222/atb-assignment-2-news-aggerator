const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const usersRoutes = require("./routes/users/usersRoute");
const authRoutes = require("./routes/authRoutes");
const preferencesRoutes = require("./routes/users/preferencesRoutes");
const newsRoutes = require("./routes/users/newsRoutes");

const app = express();
const port = 3000;

dotenv.config();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Database connection
mongoose
  .connect(process.env.MONGO_DB_HOST_URL)
  .then(() => {
    console.log("Connected successfuly to mongodb");
  })
  .catch(err => console.log(err));

//routes

app.use("/api/v1/users", usersRoutes);
app.use("/api/v1/auth", authRoutes);

app.use("/api/v1/preferences", preferencesRoutes);

app.use("/api/v1/news", newsRoutes);

app.listen(port, err => {
  if (err) {
    return console.log("Something bad happened", err);
  }
  console.log(`Server is listening on ${port}`);
});

module.exports = app;
