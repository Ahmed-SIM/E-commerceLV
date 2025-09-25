   "use client"
   import { Button } from '@/components/ui/button'
import React, { useContext } from 'react'
import { removeItemFromCart } from './cart.actions'
import { toast } from 'sonner'
import { CartContext } from '@/_services/CartContext'
   
   export default function RemoveItemBtn({id}:{id:string}) {
  const {updateCartCount}=useContext(CartContext)
   
  async function  handleRemoveItem(){
   // out put includes null or number of the items
      const outPut=  await removeItemFromCart(id)  
  if(outPut === null){
toast.error("could't remove the item ")
  }else{
toast.success("Product removed successfully")
updateCartCount(outPut)
  }
  }

    return (
       <div>
        
   
   <Button onClick={handleRemoveItem} variant={ 'destructive'} className='cursor-pointer w-full bg-red-600' >remove</Button>
 
       </div>
     )
   }
   