'use client'

import React, { useEffect, useState } from "react";
import { GetSpecificSubCategory } from "./categories.servise";

interface SubCategoryProps {
  id: string;            
  categoryName: string; 
}

export default function SubCategory({ id, categoryName }: SubCategoryProps) {
  const [arrOfSubCat, setArrOfSubCat] = useState<any[] | null>(null);

  async function getMySubCat() {
    const res = await GetSpecificSubCategory(id);
    setArrOfSubCat(res);
  }

  useEffect(() => {
    if (id) {
      getMySubCat();
    }
  }, [id]);

  if (!arrOfSubCat) {
    return (
      <div className="flex justify-center items-center mt-10">
        <i className="fa-solid fa-spinner fa-spin fa-2x text-blue-400"></i>
      </div>
    );
  }

  if (arrOfSubCat.length === 0) {
    return (
      <div className="text-center mt-10 text-gray-500">
        No Subcategories found for {categoryName}.
      </div>
    );
  }

  return (
    <div className="mt-10 text-center">
      <h2 className="text-2xl font-semibold text-green-600 mb-6">
        {categoryName} Subcategories
      </h2>
      <div className="flex justify-center gap-4 flex-wrap text-3xl">
        {arrOfSubCat.map((sub) => (
          <div
            key={sub._id}
            className="px-6 py-3 border rounded-lg shadow-sm hover:shadow-md transition bg-white cursor-pointer"
          >
            {sub.name}
          </div>
        ))}
      </div>
    </div>
  );
}
