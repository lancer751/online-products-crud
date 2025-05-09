import express from "express"
import {
  createProduct,
  deleteProduct,
  deleteProductsById,
  getProducts,
  getSingleProduct,
  updateProduct,
  updateProducts,
} from "../controllers/product.controller"

const router = express.Router()

router.get("/:id", getSingleProduct)
router.get("/", getProducts)
router.post("/", createProduct)
router.patch("/updatemany", updateProducts)
router.put("/:id", updateProduct)
router.delete("/deletemany", deleteProductsById)
router.delete("/:id", deleteProduct)

export default router
