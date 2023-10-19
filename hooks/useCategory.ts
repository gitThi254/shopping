import {
  deleteCategory,
  getCategories,
  getCategory,
  postCategory,
  updateCategory,
} from "@/libs/fetch/fetchCategory";
import { useMutation, useQueryClient, useQuery } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

export const useGetCategories = () => {
  return useQuery({
    queryKey: ["categories"],
    queryFn: getCategories,
  });
};

export const useGetCategory = (id: string) => {
  const queryClient = useQueryClient();
  return useQuery({
    queryKey: ["categories", id],
    queryFn: () => getCategory(id),
    initialData: () =>
      queryClient
        .getQueryData<Category[]>(["categories"])
        ?.find((item) => item.id === id),
  });
};

export const usePostCategory = () => {
  const router = useRouter();
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: postCategory,
    onSuccess: (data) => {
      queryClient.setQueryData(["categories", data.id], data);
      queryClient.invalidateQueries({ queryKey: ["categories"] });
      router.push("/admin/categories");
    },
  });
};

export const useUpdateCategory = () => {
  const router = useRouter();
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: updateCategory,
    onSuccess: (data) => {
      queryClient.setQueryData(["categories", data.id], data);
      queryClient.invalidateQueries({ queryKey: ["categories"] });
      router.push("/admin/categories");
    },
  });
};

export const useDeleteCategory = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: deleteCategory,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["categories"] });
    },
  });
};
