import mongoose, { model, Schema } from "mongoose";

const categorySchema = new Schema(
  {
    name: { type: String, required: true },
    books: [{ type: mongoose.Schema.ObjectId, ref: "Book" }],
  },
  {
    timestamps: true,
  }
);

const Category = model("Category", categorySchema);

export default Category;
