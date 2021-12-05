const express = require("express");
const path = require("path");
const app = express();

const routing = require("./routes/routing");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use("", routing);

app.use((req, res, next) => {
  const error = new Error("Not Found!");
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  res.json({
    error: {
      message: error.message,
    },
  });
});

app.listen(3000, () => {
  console.log("Server is Online!");
});
