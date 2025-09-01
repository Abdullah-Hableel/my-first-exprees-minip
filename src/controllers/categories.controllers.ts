import { Request, Response } from "express";
import Category from "../models/Catagory";

const getCategories = async (req: Request, res: Response) => {
  try {
    const authors = await Category.find();
    res.status(200).json(authors);
  } catch (error) {
    res.status(500).json({ message: "Error get Categories" });
  }
};

const createCategory = async (req: Request, res: Response) => {
  try {
    console.log(req.body);
    const category = await Category.create(req.body);
    console.log("🚀 ~ createCategory ~ req.body:", req.body);
    res.status(201).json(category);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error creating Category" });
  }
};

const getCategoryById = async (req: Request, res: Response) => {
  try {
    const categories = await Category.findById(req.params.id);

    res.status(200).json(categories);
  } catch (error) {
    res.status(500).json({ message: "Error find Category" });
  }
};

const updateCategory = async (req: Request, res: Response) => {
  try {
    const category = await Category.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json(category);
  } catch (error) {
    res.status(500).json({ message: "Error updating Category" });
  }
};

const deleteCategory = async (req: Request, res: Response) => {
  try {
    await Category.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Category deleted" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting Category" });
  }
};

export {
  createCategory,
  getCategoryById,
  getCategories,
  updateCategory,
  deleteCategory,
};
