type Category = {
  id: string;
  parent_category_id?: string;
  category_name: string;
  createdAt: string;
  updatedAt: string;
};

type UpdateCategory = Pick<Category, "category_name">;
type PostCategory = Omit<Category, "id" | "createdAt" | "updatedAt">;
