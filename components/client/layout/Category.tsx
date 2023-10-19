import Link from "next/link";
import React from "react";

const Category = ({ data }: { data: Category }) => {
  return (
    <div>
      <Link href='/admin/categories'>go to categories</Link>
      <div>{data.category_name}</div>
      <div>{new Date(data.createdAt.toString()).toLocaleString()}</div>
      <div>{new Date(data.updatedAt.toString()).toLocaleString()}</div>
    </div>
  );
};

export default Category;
