import { Request, Response } from "express";
import { PrismaClient } from "../generated/prisma";

const prisma = new PrismaClient();

interface Category {
  readonly id: number;
  name: string;
}

export async function getCategories(req: Request, res: Response) {
  try {
    const allCategories = await prisma.category.findMany();
    console.log(allCategories);
    res.status(200).json({ success: true, data: allCategories });
  } catch (error) {
    res.status(500).json({ success: false, message: "Internal Server Error" });
    console.log("Error in getCategories", error);
  }
}

export async function getSingleCategory(req: Request, res: Response) {
  const { id: categoryId } = req.params;

  try {
    const singleCategory = await prisma.category.findUnique({
      where: {
        id: Number(categoryId),
      },
    });

    if (singleCategory === null) {
      return res
        .status(404)
        .json({ success: false, error: "Category Not Found" });
    }

    console.log(singleCategory);
    return res.status(200).json({ success: true, data: singleCategory });
  } catch (error) {
    res.status(500).json({ success: false, error: "Internal Server Error" });
    console.log("Error in getSingleCategory", error);
  }
}

export async function createCategory(req: Request, res: Response) {
  const category: Category = req.body;

  if (!category.name) {
    return res
      .status(400)
      .json({ success: false, message: "Faltan campos requeridos" });
  }
  
  try {
    const newCategory = await prisma.category.create({
      data: category,
    });

    res.status(201).json({ success: true, data: newCategory });
  } catch (error) {
    console.log("Error in createCategory", error);
    return res
      .status(500)
      .json({ success: false, message: "Internal Server Error" });
  }
}

export async function updateProduct(req: Request, response: Response){
     
}

export async function deleteProduct(req: Request, response: Response){
     
}