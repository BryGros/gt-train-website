const Course = require("../models/Course");

const getAllCourseInfo = async (req, res) => {
  try {
    const now = new Date();

    const classInfo = await Course.aggregate([
      {
        $lookup: {
          from: "scheduledsessions",
          localField: "id",
          foreignField: "courseId",
          as: "sessions",
        },
      },
      {
        $unwind: {
          path: "$sessions",
          preserveNullAndEmptyArrays: true,
        },
      },
      {
        $addFields: {
          "sessions.sessions": {
            $filter: {
              input: "$sessions.sessions",
              as: "session",
              cond: {
                $and: [
                  {
                    $in: [
                      "$$session.status",
                      ["Confirmed", "Pending Registrations"],
                    ],
                  },
                  { $gte: ["$$session.date", now] },
                ],
              },
            },
          },
        },
      },
    ]);

    res.status(200).json(classInfo);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getAllCourseInfo,
};
