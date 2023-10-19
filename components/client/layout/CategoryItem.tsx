import React from "react";
import BtnDeleteCategory from "../btn/BtnDeleteCategory";
import Link from "next/link";

const CategoryItem = ({ item }: { item: Category }) => {
  return (
    <div className='grid w-[500px] grid-cols-3'>
      <Link href={`/admin/categories/${item.id}`}>{item.category_name}</Link>
      <Link href={`/admin/categories/update/${item.id}`}>update</Link>
      <BtnDeleteCategory id={item.id} />
    </div>
  );
};

export default CategoryItem;
