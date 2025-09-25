"use client"
import React from 'react'
import { toast } from 'sonner'
import { removeItemToWishList } from './wishList.servise'
import { Button } from '@/components/ui/button'

export default  function RemoveFromWishListBtn({productId}:{productId:string}) {
  
  async function handleRemovingItemFromWishListPage(){
    const isRemoved = await removeItemToWishList(productId)
   if(isRemoved){
        toast.success('removed successfully',{position:'top-center'})
        console.log("removed to wish list")
  
  }



    return (
    <Button  onClick={handleRemovingItemFromWishListPage}    >
      <i className="fa-solid fa-trash" style={{color: "#eb0000"}}></i>
    </Button>
  )
}}

