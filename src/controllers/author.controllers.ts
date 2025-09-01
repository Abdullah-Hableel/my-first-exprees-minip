import { Request, Response } from "express";
import Author from "../../src/models/Author";

const createAuthor = async (req: Request, res: Response) => {
  try {
    const author = await Author.create(req.body);
    console.log("🚀 ~ createAuthor ~ req.body:", req.body);
    res.status(201).json(author);
  } catch (error) {
    res.status(500).json({ message: "Error creating Author" });
  }
};

const getAllAuthor = async (req: Request, res: Response) => {
  try {
    const authors = await Author.find().populate("books");
    res.status(200).json(authors);
  } catch (error) {
    res.status(500).json({ message: "Error fetching Authors" });
  }
};
const getAuthorById = async (req: Request, res: Response) => {
  try {
    const author = await Author.findById(req.params.id);

    res.status(200).json(author);
  } catch (error) {
    res.status(500).json({ message: "Error find Author" });
  }
};

const updateAuthor = async (req: Request, res: Response) => {
  try {
    const author = await Author.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json(author);
  } catch (error) {
    res.status(500).json({ message: "Error updating Author" });
  }
};

const deleteAuthor = async (req: Request, res: Response) => {
  try {
    await Author.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Author deleted" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting Author" });
  }
};

export {
  createAuthor,
  getAllAuthor,
  getAuthorById,
  updateAuthor,
  deleteAuthor,
};
