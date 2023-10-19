import Link from "next/link";
import React from "react";

const AdminPage = () => {
  return (
    <div>
      <h1>Admin</h1>
      <Link href='/admin/categories'>Category</Link>
    </div>
  );
};

export default AdminPage;
