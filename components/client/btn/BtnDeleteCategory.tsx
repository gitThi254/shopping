"use client";
import { useDeleteCategory, usePostCategory } from "@/hooks/useCategory";
import React from "react";

const BtnDeleteCategory = ({ id }: { id: string }) => {
  const deleteCategoryMutation = useDeleteCategory();
  return (
    <button
      onClick={() => deleteCategoryMutation.mutate(id)}
      disabled={deleteCategoryMutation.isPending}
    >
      {deleteCategoryMutation.isPending ? "loading..." : "delete"}
    </button>
  );
};

export default BtnDeleteCategory;
