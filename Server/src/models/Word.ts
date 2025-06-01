import mongoose, { Schema } from "mongoose";

const wordSchema = new mongoose.Schema(
  {
    word: {
      type: String,
      unique: true,
      required: true,
    },
    length: {
      type: Number,
      required: true,
    },
    difficulty: {
      type: String,
      enum: ["easy", "medium", "hard"],
      default: "medium",
    },
  },
  { timestamps: true }
);

const Word = mongoose.models.Word || mongoose.model("Word", wordSchema);

export default Word;
