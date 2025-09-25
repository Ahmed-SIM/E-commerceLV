"use client"

import React, { useState } from 'react'
import { ProductCardProops } from './ProductCard.type'
import Link from 'next/link'
import AddProductBtn from '../AddProductBtn/AddProductBtn'
import { Button } from '@/components/ui/button'
import { addItemToWishList, removeItemToWishList } from '@/app/wishList/wishList.servise'
import { toast } from 'sonner'

export default function ProductCard({product}:ProductCardProops) {
  
  const [isAddedToWishList, setIsAddedToWishList] = useState(false);
   

// this function handle adding and removing items to wish List
  async function handleAddingToWishList(){
if(isAddedToWishList){
// calling Api to remove to wish list
   const isRemoved = await removeItemToWishList(product.id)
   if(isRemoved){
        toast.success('removed successfully',{position:'top-center'})
        setIsAddedToWishList(!isAddedToWishList)
        console.log("removed to wish list")

   } else{
        toast.error('error happened while removing to the wish List',{position:'top-center'})

   }

}else{
// calling APi to Add from item
  const res =await  addItemToWishList(product.id)
if(res.status === "success"){
setIsAddedToWishList(true)
toast.success("Added to wish List successfully", { position: "top-center" });
setIsAddedToWishList(!isAddedToWishList)
console.log("Added from wish list")
}else {
      toast.error("Error happened while adding to the wish List", { position: "top-center" });
    }
}
 }
    
 

  return (
    <div>
      <Link href={`/productDetails/${product.id}`} >
      <div   className=" pb-5  " >

<img src={product.imageCover} className="w-full" alt={product.title} />
{/* split and join to take the first two words of the title */}
<h2>{product.title.split(' ',2).join(' ')}</h2>
{/* ?? ya3ny apply this und if it null or undifined take the other one */}
{/* <h2>price : {product.priceAfterDiscount ?? product.price}</h2> */}
<h2>price : {product.priceAfterDiscount ?  <>
<span className='text-red-700 line-through mx-2'>{product.priceAfterDiscount}</span>
<span >{product.price}</span>

</> :  <span >{product.price}</span>  }  </h2>

<span>{product.ratingsAverage} <i className="fa-solid fa-star" style={{color: '#FFD43B'}}></i></span>

       
     </div>
      
      
      </Link>

{/* heart button handling  */}
 <div>
      {isAddedToWishList ? (
        <Button  onClick={handleAddingToWishList} variant={"outline"} className="cursor-pointer mb-1 ">
          <i className="fa-solid fa-heart" style={{ color: "#dd3d08" }}></i>
        </Button>
      ) : (
        <Button   onClick={handleAddingToWishList}   variant={"outline"} className="cursor-pointer mb-1 ">
          <i className="fa-solid fa-heart"></i>{" "}
        </Button>
      )}
    </div>


<AddProductBtn   id={product?.id}/>

    </div>
  )
}
