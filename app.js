const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const mongoose = require("mongoose");

app.use(express.urlencoded({ extended: true }));

const allRoute = require("./routes/allRoutes");

app.set("view engine", "ejs");

app.use(express.static("public"));

// Method Override for PUT and DELETE requests
var methodOverride = require("method-override");
app.use(methodOverride("_method"));

// Auto-reload setup
const path = require("path");
const livereload = require("livereload");
const liveReloadServer = livereload.createServer();
liveReloadServer.watch(path.join(__dirname, "public"));

const connectLivereload = require("connect-livereload");
app.use(connectLivereload());

liveReloadServer.server.once("connection", () => {
  setTimeout(() => {
    liveReloadServer.refresh("/");
  }, 100);
});

// Start the server and connect to MongoDB
// Replace the connection string with your MongoDB URI
mongoose
  .connect(
    "mongodb+srv://ahmedhamdi252000:VnJxqtOWsmkMyHiQ@cluster0.aiuk7ds.mongodb.net/alldata?retryWrites=true&w=majority&appName=Cluster0"
  )

  .then(() => {
    app.listen(port, () => {
      console.log(`http://localhost:${port}/`);
      console.log("MongoDB connected successfully");
    });
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
  });

app.use(allRoute);
