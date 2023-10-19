import CategoryFetchUpdate from "@/components/client/layout/CategoryFetchUpdate";
import React from "react";

const UpdateCategory = ({ params: { id } }: { params: { id: string } }) => {
  return (
    <div>
      <div>Form update</div>
      <CategoryFetchUpdate id={id} />
    </div>
  );
};

export default UpdateCategory;
