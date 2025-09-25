'use client'

import { useEffect, useState } from "react";
import { getBrandsApi } from "./brands.servise"; 

type BrandType = {
  _id: string;
  name: string;
  image: string;
};

export default function Brands() {
  const [arrOfBrands, setArrOfBrands] = useState<BrandType[] | null>(null);

  async function getAllBrands() {
    const allBrands = await getBrandsApi();
    setArrOfBrands(allBrands);
  }

  useEffect(() => {
    getAllBrands();
  }, []);

  if (!arrOfBrands) {
    return (
      <div className="h-screen flex justify-center items-center">
        <i className="fa-solid fa-spinner fa-spin fa-5x text-blue-400"></i>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      {/* Title */}
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-blue-600">Our Brands</h2>
        <p className="text-gray-500 mt-2">
          You can see our brands and each brand includes the products in it.
        </p>
      </div>

      {/* Grid of brands */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10 items-center text-center">
        {arrOfBrands.map((brand) => (
          <div
            key={brand._id}
            className="flex flex-col items-center space-y-2 group transition"
          >
            {/* Logo */}
            <img
              src={brand.image}
              alt={brand.name}
              className="h-20 object-contain grayscale group-hover:grayscale-0 transform group-hover:scale-110 transition duration-300"
            />

            <a className="text-blue-600 group-hover:underline group-hover:font-semibold transition">
              {brand.name}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
