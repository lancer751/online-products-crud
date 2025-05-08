import express from "express"
import {
  createProduct,
  deleteProduct,
  deleteProductsById,
  getProducts,
  getSingleProduct,
  updateProduct,
} from "../controllers/product.controller"

const router = express.Router()

router.get("/:id", getSingleProduct)
router.get("/", getProducts)
router.post("/", createProduct)
router.put("/:id", updateProduct)
router.delete("/deletemany", deleteProductsById)
router.delete("/:id", deleteProduct)

export default router
