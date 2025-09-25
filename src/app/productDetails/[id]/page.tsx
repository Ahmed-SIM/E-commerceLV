import { getSpecifiedProduct } from '@/_services/product.service'
import AddProductBtn from '@/app/_components/AddProductBtn/AddProductBtn'
import { Button } from '@/components/ui/button'
import React from 'react'

type productDetailsProops = {
  params: {
    id: string
  }
}

// any page I use params in it's path like [id] it is sent in it's proops
export default async function productDetails({ params }: productDetailsProops) {
  const object = await getSpecifiedProduct(params.id)

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 px-6 md:px-10 py-8 bg-gray-50 min-h-screen">
      
      <div className="col-span-1 flex justify-center items-start">
        <img
          src={object?.imageCover}
          alt={object?.title}
          className="w-full max-w-sm h-96 object-contain rounded-2xl shadow-md hover:shadow-xl transition duration-300 bg-white p-4"
        />
      </div>

      <div className="col-span-3 flex flex-col space-y-4">
        <h1 className="font-bold text-3xl md:text-4xl text-gray-800">
          {object?.title}
        </h1>
        <p className="text-lg text-gray-600 leading-relaxed">
          {object?.description}
        </p>

        <h2 className="text-xl font-semibold text-gray-700">
          {object?.title.split(' ', 2).join(' ')}
        </h2>

        <h2 className="text-2xl font-bold">
          price:{' '}
          {object?.priceAfterDiscount ? (
            <>
              <span className="text-gray-400 line-through mr-2">
                {object?.priceAfterDiscount}
              </span>
              <span className="text-green-600">{object?.price}</span>
            </>
          ) : (
            <span className="text-green-600">{object?.price}</span>
          )}
        </h2>

        <span className="flex items-center space-x-2 text-lg font-medium text-gray-700">
          {object?.ratingsAverage}
          <i className="fa-solid fa-star text-yellow-400" aria-hidden="true"></i>
        </span>

        <h5 className="text-sm md:text-base text-gray-700">
          <span className="font-semibold">Category:</span> {object?.category.name}
        </h5>
        <h5 className="text-sm md:text-base text-gray-700">
          <span className="font-semibold">Brand:</span> {object?.category.name}
        </h5>

       <AddProductBtn id={params.id}  />
       
      </div>
    </div>
  )
}
