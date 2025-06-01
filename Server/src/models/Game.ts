import mongoose, { Schema } from "mongoose";

const gameSchema = new mongoose.Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    word: String,
    guesses: [String],
    won: Number,
    guessCount: Number,
    date: {
      type: Date,
      default: Date.now,
    },
    shared: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const Game = mongoose.models.Game || mongoose.model("Game", gameSchema);

export default Game;
