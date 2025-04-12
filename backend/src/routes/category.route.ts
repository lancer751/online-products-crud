import express from "express";
import { createCategory, getCategories, getSingleCategory } from "../controllers/category.controller";
import { deleteProduct, updateProduct } from "../controllers/product.controller";

const router = express.Router()

router.get("/:id", getSingleCategory)
router.get("/", getCategories)
router.post("/", createCategory)
router.put("/:id", updateProduct)
router.delete("/:id", deleteProduct)

export default router