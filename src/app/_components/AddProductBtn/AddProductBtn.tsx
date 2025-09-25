'use client'

import { CartContext } from '@/_services/CartContext'
import { addProductToCart } from '@/app/cart/cart.actions'
import { Button } from '@/components/ui/button'
import React, { useContext } from 'react'
import { toast } from 'sonner'


export default  function AddProductBtn({id}:{id:string}) {
  
  const { updateCartCount}=useContext(CartContext);
  
  async function handleAddToCart(){
    // we will not call the Api here to secure it and prevent anyone to see it in the application tap 
    // so we will use server actions
   const isAddedSuccessfully=  await  addProductToCart(id)
    
   if(isAddedSuccessfully){
        toast.success('Product added successfully',{position:'top-center'})
         updateCartCount(isAddedSuccessfully)
        // when adding a product refresh the cart page
        // revalidatePath('/cart')

   }else{
        toast.error('error happened while adding to the cart',{position:'top-center'})

   }

  }
  
    return (
    <div>
             <Button onClick={handleAddToCart} className="w-full cursor-pointer">Add to card</Button>

    </div>
  )
}
