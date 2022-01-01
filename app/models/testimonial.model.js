const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const testiMonialSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    photo: {
      type: String,
    },
    post: {
      type: String,
      required:true,
    },
    description: {
      type: String,
    },
    active: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: { createdAt: "created_at", updatedAt: "updated_at" } }
);

module.exports = mongoose.model("Testimonial", testiMonialSchema);
