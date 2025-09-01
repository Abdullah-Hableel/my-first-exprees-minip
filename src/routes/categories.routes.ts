import express from "express";
import { createCategorie } from "../controllers/categories.controllers";

const router = express.Router();

router.post("/", createCategorie);
