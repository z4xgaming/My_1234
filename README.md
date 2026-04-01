const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.json({ status: "Server Running ✅" });
});

module.exports = router;module.exports = (upload) => {
  const express = require("express");
  const router = express.Router();

  router.post("/", upload.array("files"), (req, res) => {
    res.send("✅ Files uploaded successfully");
  });

  return router;
};helper.jsmodule.exportsfunction log(msg) {
  console.log("LOG:", msg);
}

module.exports = { log };const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.json({ status: "Server Running ✅" });
});

module.exports = router;router.post{
  "data": "temporary"
}
