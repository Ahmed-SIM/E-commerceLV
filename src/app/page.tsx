import React, { lazy, Suspense } from "react";
import { ProductType } from "./_components/_interfaces/interfaces";
import ProductCard from "./_components/ProductCard/ProductCard";
import { getAllProducts } from "@/_services/product.service";
import HomeSlider from "./_components/HomeSlider/HomeSlider";
// import CategoriesSlider from "./_components/CategorieSlider/CategoriesSlider";

// to apply lazy loading to avoid the whole page to load until this component load

// I have to put the component in another built in component made by react  <Suspense></Suspense>
const CategoriesSlider= lazy(()=>import('./_components/CategorieSlider/CategoriesSlider'))


export default async function Home() {
  
  // this call we can not do in react because react is CSR(Client Side Rindering) so in every rerinder it will be
  // called but we can use it in SSR(Server Side Rindering) because the function will be called one time in the server only
  // lazem na3melhaa await function 3ashan 3at3amalha call after the responce comes
  const allProducts = await getAllProducts();
  

  

  return (
    <>
      {/* Hero Slider Section */}
      <div className="w-full bg-gradient-to-r from-indigo-50 via-white to-indigo-50 shadow-inner">
        <HomeSlider />
      </div>

      {/* fallback={ComponentThatWillBeRinderedUntilTheCategorySliderLoad} */}
      <Suspense fallback={<h1 className="text-center text-2xl font-semibold py-12 text-indigo-600 animate-pulse">Loading..........</h1>}>
        <div className="w-full bg-white shadow-md py-6 hover:shadow-lg transition duration-300">
          <CategoriesSlider />
        </div>
      </Suspense>

      {/* Products Grid */}
      <div className="w-11/12 lg:w-3/4 mx-auto py-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Featured Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {allProducts?.map((product: ProductType) => (
            <div
              key={product.id}
              className="rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-white p-4"
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
