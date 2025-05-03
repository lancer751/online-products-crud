import express from "express"
import dotenv from "dotenv"
import productsRouter from "./routes/product.route"
import categoriesRoutes from "./routes/category.route"
import cors from "cors"
import { PrismaClient } from "./generated/prisma"
import fs from "fs/promises"
import { fileURLToPath } from "url"
import { dirname, join } from "path"

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

export interface ProductD {
    id:                   number;
    title:                string;
    description:          string;
    price:                number;
    discountPercentage:   number;
    rating:               number;
    stock:                number;
    tags:                 string[];
    brand?:               string;
    sku:                  string;
    weight:               number;
    warrantyInformation:  string;
    shippingInformation:  string;
    minimumOrderQuantity: number;
    images:               string[];
    thumbnail:            string;
}

dotenv.config()
const app = express()
const PORT = process.env.PORT || 3000
app.use(cors())
// middlewares
app.use(express.json())
app.use("/api/products/", productsRouter)
app.use("/api/categories/", categoriesRoutes)

const prisma = new PrismaClient()

app.get("/api/fill", async (req, res) => {
  try {
    const filePath = join(__dirname, "products.json")
    const fileContent = await fs.readFile(filePath, "utf-8")
    const products = JSON.parse(fileContent)
    const inserted = []
    for (const product of products) {
      try {
        const created = await prisma.product.create({ data: product })
        inserted.push(created)
      } catch {
        // Si hay error (por ejemplo, producto duplicado), lo ignoramos para continuar
      }
    }
    res.json({ success: true, inserted: inserted.length })
  } catch (error) {
    console.error(error)
    res.status(500).json({ success: false, error: "No se pudieron agregar los productos" })
  }
})

app.listen(PORT, () => {
    console.log(`Listen on port http://localhost:${PORT}`)
})