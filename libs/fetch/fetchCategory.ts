import axios from "axios";

export const getCategories = (): Promise<Category[]> =>
  axios.get("/api/admin/category").then((res) => res.data);

export const postCategory = async (data: PostCategory): Promise<Category> => {
  return await axios
    .post("http://localhost:3000/api/admin/category", data)
    .then((res) => res.data);
};

export const getCategory = async (id: string): Promise<Category> =>
  await axios
    .get(`http://localhost:3000/api/admin/category/${id}`)
    .then((res) => res.data);

export const updateCategory = async ({
  id,
  data,
}: {
  id: string;
  data: UpdateCategory;
}): Promise<Category> =>
  await axios
    .put(`http://localhost:3000/api/admin/category/${id}`, data)
    .then((res) => res.data);

export const deleteCategory = async (id: string) => {
  return await fetch(`http://localhost:3000/api/admin/category?id=${id}`, {
    method: "DELETE",
  });
};
