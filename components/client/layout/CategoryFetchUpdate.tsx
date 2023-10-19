"use client";
import { useGetCategory } from "@/hooks/useCategory";
import React from "react";
import FormUpdateCategory from "../form/FormUpdateCategory";

const CategoryFetchUpdate = ({ id }: { id: string }) => {
  const { data, isLoading, error, isError } = useGetCategory(id);
  if (isLoading) return <h1>loading...</h1>;
  if (isError) return <h1>{error.message}</h1>;
  return (
    <>
      {data && (
        <FormUpdateCategory
          id={id}
          data={{ category_name: data.category_name }}
        />
      )}
    </>
  );
};

export default CategoryFetchUpdate;
