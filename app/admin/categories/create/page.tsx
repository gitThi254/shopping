import FormPostCategory from "@/components/client/form/FormPostCategory";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div>
      <Link href='/admin/categories'>to go category</Link>
      <h1>form create product</h1>
      <FormPostCategory />
    </div>
  );
};

export default page;
