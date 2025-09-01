import mongoose, { model, Schema } from "mongoose";

const AuthorSchema = new Schema(
  {
    name: { type: String, required: true },
    contry: { type: String, required: true },
    books: [{ type: mongoose.Schema.ObjectId, ref: "Book" }],
  },
  {
    timestamps: true,
  }
);

const Author = model("Author", AuthorSchema);

export default Author;
