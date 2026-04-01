module.exports = (upload) => {
  const express = require("express");
  const router = express.Router();

  router.post("/", upload.array("files"), (req, res) => {
    res.send("✅ Files uploaded successfully");
  });

  return router;
};