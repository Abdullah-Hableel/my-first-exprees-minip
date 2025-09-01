import express from "express";
import {
  createAuthor,
  getAllAuthor,
  getAuthorById,
  updateAuthor,
  deleteAuthor,
} from "../controllers/author.controllers";

const router = express.Router();

router.post("/", createAuthor);
router.get("/", getAllAuthor);
router.get("/:id", getAuthorById);
router.put("/:id", updateAuthor);
router.delete("/:id", deleteAuthor);

export default router;
