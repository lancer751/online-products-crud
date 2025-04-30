import express from "express";
import dotenv from "dotenv";
import productsRouter from "./routes/product.route"
import categoriesRoutes from "./routes/category.route"
import cors from "cors"

dotenv.config()
const app = express()
const PORT = process.env.PORT || 3000
app.use(cors())
// middlewares
app.use(express.json())

app.use("/api/products/", productsRouter)
app.use("/api/categories/", categoriesRoutes)

app.listen(PORT, () => {
    console.log(`Listen on port http://localhost:${PORT}`)
    
})