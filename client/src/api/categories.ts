import { mainInstance } from "./instances";

export interface Category {
  id: number;
  name: string;
}

export const getAllCategories = async () => {
  const response = await mainInstance.get<{
    success: boolean;
    data: Category[];
  }>("/categories");
  return response.data.data;
};

export const getSingleCategory = async (id: number) => {
  const response = await mainInstance.get<Category>(`/categories/${id}`);
  return response.data;
};

export const createNewCategory = async (categoryData: Category) => {
  try {
    const response = await mainInstance.post<Category>(
      "/categories",
      categoryData
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const updateCategory = async (
  id: number,
  categoryData: Partial<Category>
) => {
  const response = await mainInstance.put<{ success: boolean; data: Category }>(
    `/categories/${id}`,
    categoryData
  );
  return response.data;
};

export const deleteCategory = async (id: number) => {
  const response = await mainInstance.delete<{ success: boolean }>(
    `/categories/${id}`
  );
  return response.data;
};
