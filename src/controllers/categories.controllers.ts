import { Request, Response } from "express";
import Categories from "../models/Catagory";

const createCategorie = async (req: Request, res: Response) => {
  try {
    const categorie = await Categories.create(req.body);
    console.log("🚀 ~ createCategorie ~ req.body:", req.body);
    res.status(201).json(categorie);
  } catch (error) {
    res.status(500).json({ message: "Error creating categorie" });
  }
};

export { createCategorie };
