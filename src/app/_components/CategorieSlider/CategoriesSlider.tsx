import React from 'react'
import MySwiper from './../MySwiper/MySwiper';
import { getAllCategories } from '@/_services/Categories.service';

export default async function CategoriesSlider() {
  
  // images in the Slider come from Api
  const allCategories = await getAllCategories();
  
 
  
  //law allCategories == null matkamlsh L rindering (3mlt kga badad mafdal a7ot ?)
  if (allCategories == null) {
    return;
  }

  return (
    <>
      <div className="w-full bg-gray-50 py-6 px-4 rounded-2xl shadow-md">
        <h2 className="text-xl font-semibold text-gray-700 mb-4 pl-2">
          Categories
        </h2>

        <div className="overflow-hidden rounded-xl shadow-md hover:shadow-lg transition duration-300">
          <MySwiper
            slidesPerview={6}
            imageList={allCategories.map(category => (category.image))}
          />
        </div>
      </div>
    </>
  )
}
