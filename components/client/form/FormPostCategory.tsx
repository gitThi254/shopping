"use client";
import { usePostCategory } from "@/hooks/useCategory";
import { postCategory } from "@/libs/fetch/fetchCategory";
import React from "react";
import { useForm } from "react-hook-form";

const FormPostCategory = () => {
  const form = useForm<PostCategory>({
    defaultValues: {
      category_name: "",
    },
  });
  const createUserMutation = usePostCategory();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = form;
  console.log(createUserMutation.status);
  const onSubmit = (data: PostCategory) => {
    createUserMutation.mutate(data);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        type='text'
        placeholder='category name'
        {...register("category_name")}
      />
      <button disabled={createUserMutation.isPending}>
        {createUserMutation.isPending ? "loading..." : "create"}
      </button>
    </form>
  );
};

export default FormPostCategory;
