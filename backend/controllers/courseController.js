const Course = require("../models/Course");

const getAllCourseInfo = async (req, res) => {
  try {
    const classInfo = await Course.find();
    res.status(200).json(classInfo);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getAllCourseInfo,
};
