const express = require("express");
const app = express();
const port = 5000;

const mongoose = require("mongoose");
mongoose
  .connect(
    "mongodb+srv://bonyeon:akdlsem1!@boilerplate-tmfgp.mongodb.net/test?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    }
  )
  .then(() => console.log("MongoDB Connect...."))
  .catch((err) => console.log(err));

app.get("/", (req, res) => res.send("안녕하세요~"));

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);
