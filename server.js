const express = require("express");
const multer = require("multer");
const path = require("path");

const app = express();

// storage
const storage = multer.diskStorage({
  destination: "uploads/",
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  }
});

const upload = multer({ storage });

// middleware
app.use(express.static(__dirname));
app.use(express.json());

// routes
const uploadRoute = require("./upload");
const statusRoute = require("./status");

app.use("/api/upload", uploadRoute(upload));
app.use("/api/status", statusRoute);

// start
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log("Server running"));