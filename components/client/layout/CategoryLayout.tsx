"use client";
import { useGetCategories, useGetCategory } from "@/hooks/useCategory";
import React from "react";
import CategoryItem from "./CategoryItem";

const CategoryLayout = () => {
  const { data, isLoading, isError, error } = useGetCategories();
  if (isLoading) return <h1>loading...</h1>;
  if (isError) return <h1>{error.message}</h1>;
  return (
    <div>
      {data ? (
        <div>
          {data.map((item) => (
            <CategoryItem key={item.id} item={item} />
          ))}
        </div>
      ) : (
        "not found"
      )}
    </div>
  );
};

export default CategoryLayout;
