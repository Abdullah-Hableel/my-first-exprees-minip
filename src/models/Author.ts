import mongoose, { model, Model, Schema } from "mongoose";

const AuthorSchema = new Schema(
  {
    name: { type: String, required: true },
    contry: { type: String, required: true },
    books: [{ type: mongoose.Schema.ObjectId, ref: "Books" }],
  },
  {
    timestamps: true,
  }
);

const Author = model("Author", AuthorSchema);

export default Author;
