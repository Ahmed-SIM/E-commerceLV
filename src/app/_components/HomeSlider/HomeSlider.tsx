import React from 'react'
import img1 from '@/assets/images/slider-image-1.jpeg'
import img2 from '@/assets/images/slider-image-2.jpeg'
import img3 from '@/assets/images/slider-image-3.jpeg'
import blog1 from '@/assets/images/blog-img-1.jpeg'
import blog2 from '@/assets/images/blog-img-2.jpeg'
import Image from 'next/image';
import MySwiper from '../MySwiper/MySwiper'

export default function HomeSlider() {
  return (
    <>
      <div className="flex gap-6 px-6 py-4 bg-gray-50 rounded-2xl shadow-lg">
        
        {/* Slider Section */}
        <div className="flex-1 overflow-hidden rounded-xl shadow-md">
          <MySwiper imageList={[img1.src, img2.src, img3.src]} />
        </div>

        {/* Side Blogs */}
        <div className="w-1/4 flex flex-col gap-4">
          <div className="overflow-hidden rounded-xl shadow-md hover:shadow-xl transition duration-300">
            <Image
              src={blog1}
              className="w-full h-[200px] object-cover hover:scale-105 transition duration-300"
              alt="blo1"
            />
          </div>
          <div className="overflow-hidden rounded-xl shadow-md hover:shadow-xl transition duration-300">
            <Image
              src={blog2}
              className="w-full h-[200px] object-cover hover:scale-105 transition duration-300"
              alt="blo2"
            />
          </div>
        </div>
      </div>
    </>
  )
}
