import mongoose, { model, Model, Schema } from "mongoose";

const BookSchema = new Schema(
  {
    title: { type: String, required: true },
    author: [{ type: mongoose.Schema.ObjectId, ref: "Author", required: true }],
    categories: [{ type: mongoose.Schema.ObjectId, ref: "Category" }],
  },
  {
    timestamps: true,
  }
);

const Author = model("Book", BookSchema);

export default Author;
