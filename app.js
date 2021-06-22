const express = require("express");
const path = require("path");

const app = express();
const port = 3000;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("home.ejs");
});

app.get("/home", (req, res) => {
  res.render("home.ejs");
});

app.get("/about", (req, res) => {
  res.render("about.ejs");
});

app.get("/service", (req, res) => {
  res.render("service.ejs");
});

app.get("/team", (req, res) => {
  res.render("team.ejs");
});

app.get("/contact", (req, res) => {
  res.render("contact.ejs");
});

app.listen(port, () => {
  console.log("running", port);
});
