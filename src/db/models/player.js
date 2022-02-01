import mongoose from "mongoose";
import bluebird from "bluebird";

mongoose.Promise = bluebird;

const Schema = mongoose.Schema;

const PlayerSchema = new Schema({
  name: { type: String, required: true },
  club: { type: String, required: true },
  position: { type: String, required: true },
  age: { type: Number, required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

PlayerSchema.pre("save", (next) => {
  next();
});

export default mongoose.model("Player", PlayerSchema);
