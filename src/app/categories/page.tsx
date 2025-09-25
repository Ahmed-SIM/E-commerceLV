'use client'

import React, { useState, useEffect } from "react";
import { getAllCategories } from "./categories.servise";
import SubCategory from "./SubCategory";

type CategoriesType = {
  _id: string;
  name: string;
  image: string;
};

export default function CategoriesPage() {
  const [arrCategories, setArrCategories] = useState<CategoriesType[] | null>(null);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  async function getMyCategories() {
    const ArrOfAllCategories = await getAllCategories();
    setArrCategories(ArrOfAllCategories);
  }

  useEffect(() => {
    getMyCategories();
  }, []);

  if (!arrCategories) {
    return (
      <div className='h-screen flex justify-center items-center'>
        <i className='fa-solid fa-spinner fa-spin fa-10x text-blue-300'></i>
      </div>
    );
  }

  return (
    <div className="w-full max-w-7xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center text-green-600 mb-8">
        Categories
      </h1>

      {/* Categories Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {arrCategories.map((cat: CategoriesType) => (
          <div
            key={cat._id}
            onClick={() => setActiveCategory(cat._id)}
            className={`border rounded-lg shadow-md hover:shadow-xl transition-transform duration-300 hover:-translate-y-2 bg-white overflow-hidden cursor-pointer ${
              activeCategory === cat._id ? "ring-2 ring-green-500" : ""
            }`}
          >
            <img
              src={cat.image}
              alt={cat.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4 text-center">
              <h2 className="text-lg font-semibold text-gray-700">{cat.name}</h2>
            </div>
          </div>
        ))}
      </div>

      {/* Render SubCategory Component */}
      {activeCategory && (
        <SubCategory
          id={activeCategory}
          categoryName={
            arrCategories.find((c) => c._id === activeCategory)?.name || ""
          }
        />
      )}
    </div>
  );
}
