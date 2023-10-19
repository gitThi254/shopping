import CategoryFetch from "@/components/client/layout/CategoryFetch";
import React from "react";

const CategoryPage = ({ params: { id } }: { params: { id: string } }) => {
  return (
    <div>
      <div>category info</div>
      <CategoryFetch id={id} />
    </div>
  );
};

export default CategoryPage;
