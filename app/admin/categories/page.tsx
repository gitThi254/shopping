import CategoryLayout from "@/components/client/layout/CategoryLayout";
import Link from "next/link";
import React from "react";

const CategoryPage = () => {
  return (
    <div>
      <div>List Category</div>
      <Link href='/admin/categories/create'>create category</Link>
      <CategoryLayout />
    </div>
  );
};

export default CategoryPage;
