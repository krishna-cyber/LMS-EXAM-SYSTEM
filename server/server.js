/** @format */

const express = require("express");
const morgan = require("morgan");
const dbConnect = require("./utils/dbConnect");
const cors = require("cors");
const app = express();

// setting up environment variables
require("dotenv").config();

// connecting to database
dbConnect();
app.disable("etag");
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("tiny"));
app.use(express.static("public"));

// getting routes from routes folder
app.use("/api", require("./routes/testRoute"));
app.use("/api", require("./routes/authRoute"));
app.use("/api", require("./routes/examRoute"));
app.use("/api", require("./routes/questionRoute"));
app.use("/api", require("./routes/adminControlRoute"));
app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
