const express = require("express");
const mongoose = require("mongoose");
// const bodyParser = require("body-parser");
const url = "mongodb://localhost:27017/rest";

const app = express();

app.use(express.json());
//import route
const postsRoutes = require("./routers/posts");

app.use("/posts", postsRoutes);

// route
app.get("/", (req, res) => {
  res.send("we are in node");
});

//connect to mongoDB
mongoose.connect(
  url,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("connectd to DB!");
  }
);

//lsitening to the server
app.listen(3003, () => {
  console.log("connectd");
});
