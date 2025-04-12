import { Request, RequestHandler, Response } from "express";
import { PrismaClient } from "../generated/prisma";

const prisma = new PrismaClient();

interface Product {
  id: number;
  image: string;
  name: string;
  price: number;
  description?: string;
  isnew: boolean;
  categoryId: number;
}

export async function getProducts(req: Request, res: Response) {
  try {
    const allProducts = await prisma.product.findMany();
    console.log(allProducts);
    return res.status(200).json({ success: true, data: allProducts });
  } catch (error) {
    res.status(500).json({ success: false, message: "Internal Server Error" });
    console.log("Error in getProducts", error);
  }
}

export async function getSingleProduct(req: Request, res: Response) {
  const { id: productId } = req.params;

  try {
    const singleProduct = await prisma.product.findUnique({
      where: {
        id: Number(productId),
      },
    });

    if (singleProduct === null) {
      return res
        .status(404)
        .json({ success: false, error: "Product Not Found" });
    }

    console.log(singleProduct);
    res.status(200).json({ success: true, data: singleProduct });
  } catch (error) {
    console.error("Error in getSingleProduct:", error);
    res.status(500).json({ success: false, error: "Internal Server Error" });
  }
}

export async function createProduct(req: Request, res: Response) {
  const product: Product = req.body;

  if (
    !product.name ||
    !product.price ||
    !product.image ||
    !product.categoryId ||
    product.isnew === undefined
  ) {
    return res
      .status(400)
      .json({ success: false, message: "Faltan campos requeridos" });
  }

  try {
    const newProduct = await prisma.product.create({
      data: product,
    });

    res.status(201).json({ success: true, data: newProduct });
  } catch (error) {
    console.log("Error in createProduct", error);
    return res
      .status(500)
      .json({ success: false, message: "Internal Server Error" });
  }
}

export async function updateProduct(req: Request, res: Response) {
  const { id: productId } = req.params;
  const updates = req.body;

  try {
    const existingProduct = await prisma.product.findUnique({
      where: { id: Number(productId) },
    });

    if (!existingProduct) {
      return res
        .status(404)
        .json({ success: false, message: "Product not found" });
    }

    const updatedProduct = await prisma.product.update({
      where: { id: Number(productId) },
      data: updates,
    });

    res.status(200).json({ success: true, data: updatedProduct });
  } catch (error) {
    console.error("Error in updateProduct:", error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
}

export async function deleteProduct(req: Request, res: Response) {
  const { id: productId } = req.params;

  try {
    const existingProduct = await prisma.product.findUnique({
      where: { id: Number(productId) },
    });

    if (!existingProduct) {
      return res
        .status(404)
        .json({ success: false, message: "Product not found" });
    }

    await prisma.product.delete({
      where: { id: Number(productId) },
    });

    res
      .status(200)
      .json({ success: true, message: "Product deleted successfully" });
  } catch (error) {
    console.error("Error in deleteProduct:", error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
}
