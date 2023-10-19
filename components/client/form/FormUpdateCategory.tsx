"use client";
import { usePostCategory, useUpdateCategory } from "@/hooks/useCategory";
import { postCategory } from "@/libs/fetch/fetchCategory";
import React from "react";
import { useForm } from "react-hook-form";

const FormUpdateCategory = ({
  id,
  data,
}: {
  id: string;
  data: UpdateCategory;
}) => {
  const form = useForm<UpdateCategory>({
    defaultValues: data,
  });
  const updateUserMutation = useUpdateCategory();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = form;
  const onSubmit = (data: UpdateCategory) => {
    updateUserMutation.mutate({ id, data });
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        type='text'
        placeholder='category name'
        {...register("category_name")}
      />
      <button disabled={updateUserMutation.isPending}>
        {updateUserMutation.isPending ? "loading..." : "update"}
      </button>
    </form>
  );
};

export default FormUpdateCategory;
