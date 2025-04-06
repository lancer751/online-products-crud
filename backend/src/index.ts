import express from "express";
import dotenv from "dotenv";
import productsRouter from "./routes/product.route"

dotenv.config()
const app = express()
const PORT = process.env.PORT || 3000

// middlewares
app.use(express.json())

app.use("/api/productos", productsRouter)

app.listen(PORT, () => {
    console.log(`Listen on port http://localhost:${PORT}`)
})