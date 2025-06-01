import mongoose, { Schema } from "mongoose";

const userSchema = new mongoose.Schema(
  {
    profileImage: {
      type: String,
      default: "",
    },
    name: {
      type: String,
      required: true,
      trim: true,
      minlength: 3,
      lowercase: true,
    },
    userName: {
      type: String,
      required: true,
      trim: true,
      minlength: 3,
      lowercase: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    lastLogin: {
      type: Date,
      default: Date.now,
    },
    friends: [{ type: Schema.Types.ObjectId, ref: "user" }],
    setting: {
      theme: {
        type: String,
        enum: ["light", "dark", "system"],
        default: "system",
      },
      private: {
        type: Boolean,
        default: false,
      },
    },
    streak: {
      longestStreak: {
        type: String,
        default: 0,
      },
      currentStreak: {
        type: String,
        default: 0,
      },
      lastPlayed: {
        type: Date,
      },
      totalGames: {
        type: Number,
        default: 0,
      },
      wins: {
        type: Number,
        default: 0,
      },
      losses: {
        type: String,
        default: 0,
      },
      guessDistribution: { type: [Number], default: [0, 0, 0, 0, 0, 0] },
    },
  },
  { timestamps: true }
);

const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User