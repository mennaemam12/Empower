const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
const appliedcontroller=require("../controllers/applied-for");
router.use(bodyParser.json());
router.get("/",appliedcontroller.getapplied);
router.post("/status",appliedcontroller.getstatus);
module.exports = router;