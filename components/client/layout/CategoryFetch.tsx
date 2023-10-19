"use client";
import { useGetCategory } from "@/hooks/useCategory";
import React from "react";
import Category from "./Category";

const CategoryFetch = ({ id }: { id: string }) => {
  const { data, isLoading, error, isError } = useGetCategory(id);
  if (isLoading) return <h1>loading...</h1>;
  if (isError) return <h1>{error.message}</h1>;
  return <>{data && <Category data={data} />}</>;
};

export default CategoryFetch;
