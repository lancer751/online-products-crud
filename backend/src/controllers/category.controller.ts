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

export async function getSingleCategory(
  req: Request,
  res: Response
): Promise<void> {
  const { id: categoryId } = req.params;

  try {
    const singleCategory = await prisma.category.findUnique({
      where: {
        id: Number(categoryId),
      },
    });

    if (singleCategory === null) {
      res.status(404).json({ success: false, error: "Category Not Found" });
      return;
    }

    console.log(singleCategory);
    res.status(200).json({ success: true, data: singleCategory });
    return;
  } catch (error) {
    res.status(500).json({ success: false, error: "Internal Server Error" });
    console.log("Error in getSingleCategory", error);
    return;
  }
}

export async function createCategory(req: Request, res: Response) {
  const category: Category = req.body;

  if (!category.name) {
    res
      .status(400)
      .json({ success: false, message: "Faltan campos requeridos" });
    return;
  }

  try {
    const existingCategory = await prisma.category.findUnique({
      where: {
        name: category.name,
      },
    });

    if (existingCategory !== null) {
      res
        .status(409)
        .json({ success: false, message: "Esta categoría ya existe" });
      return;
    }

    const newCategory = await prisma.category.create({
      data: category,
    });

    res.status(201).json({ success: true, data: newCategory });
  } catch (error) {
    console.log("Error in createCategory", error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
}

export async function updateCategory(req: Request, res: Response) {
  const { id: categoryId } = req.params;
  const updates = req.body;

  try {
    const existingCategory = await prisma.category.findUnique({
      where: { id: Number(categoryId) },
    });

    if (!existingCategory) {
      res.status(404).json({
        success: false,
        message: "Category Not Found",
      });
      return;
    }

    const updatedCategory = await prisma.category.update({
      where: { id: Number(categoryId) },
      data: updates,
    });

    res.status(200).json({ success: true, data: updatedCategory });
  } catch (error) {
    console.error("Error in updatedCategory: ", error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
}

export async function deleteCategory(req: Request, res: Response) {
  const { id: categoryId } = req.params;

  try {
    const existingCategory = await prisma.category.findUnique({
      where: { id: Number(categoryId) },
    });

    if (!existingCategory) {
      res.status(404).json({ success: false, message: "Product Not Found" });
      return;
    }

    await prisma.category.delete({
      where: { id: Number(categoryId) },
    });

    res
      .status(200)
      .json({ success: true, message: "Category deleted successfully" });
  } catch (error) {
    console.error("Error in deleteCategory", error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
}
