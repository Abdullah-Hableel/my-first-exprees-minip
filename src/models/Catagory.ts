import mongoose, { model, Model, Schema } from "mongoose";

const categorySchema = new Schema(
  {
    name: { type: String, required: true },
    books: [{ type: mongoose.Schema.ObjectId, ref: "Books" }],
  },
  {
    timestamps: true,
  }
);

const Author = model("Category", categorySchema);

export default Author;
