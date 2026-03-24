const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Class name is required"],
      minLength: [5, "Class name must be at least 5 characters long"],
      maxLength: [50, "Class name can't be more than 50 characters"],
    },
    wttif: {
      type: String,
      required: [true, "Who this class is for is required"],
      minLength: [10, "Who this class is for should be at least 10 characters"],
      maxLength: [
        100,
        "Who this class is forcan't be more than 100 characters",
      ],
    },
    length: {
      type: Number,
      required: [true, "You must set a length for the class"],
      min: [1, "The class must be at least 1 hour long"],
    },
    descr: {
      type: String,
      minLength: [20, "Class Description should be at least 20 characters"],
    },
    perSeatCost: {
      type: Number,
      required: [true, "You must set a per-seat cost for the class"],
      min: [100, "The per-seat cost must be at least $100"],
    },
    dedCost: {
      type: Number,
      required: [true, "You must set a per-seat cost for the class"],
      min: [200, "The per-seat cost must be at least $200"],
    },
  },
  { timestamps: true },
);

module.exports = mongoose.model("Course", courseSchema);
