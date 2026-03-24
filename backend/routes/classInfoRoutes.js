const express = require("express");
const router = express.Router();
const courseController = require("../controllers/courseController");

router.get("/", courseController.getAllCourseInfo);

module.exports = router;
