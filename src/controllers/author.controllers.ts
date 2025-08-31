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
    const authors = await Author.find();
    res.status(200).json(authors);
  } catch (error) {
    res.status(500).json({ message: "Error fetching Authors" });
  }
};

export { createAuthor, getAllAuthor };
