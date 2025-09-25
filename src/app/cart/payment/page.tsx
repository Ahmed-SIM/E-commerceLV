'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { getMyUserToken } from '@/utils/utils'
import React, { useContext, useEffect, useRef, useState } from 'react'
import { createCashOrder, createCheckOutSession } from './order.actions'
import { getUserCart } from '@/_services/cart.services'
import { toast } from 'sonner'
import { CartContext } from '@/_services/CartContext'

export default function Payment() {


    // to rerinder the cart number in navbar
     const {updateCartCount} =  useContext(CartContext)

  const cityInput=useRef<HTMLInputElement>(null);
  const phoneInput=useRef<HTMLInputElement>(null);
  const detailsInput=useRef<HTMLInputElement>(null);

const [cartId, setCartId] = useState<null |string>(null)

  async function handleGettingUserCart(){
   const res=await getUserCart() 
   setCartId(res.cartId)
}

useEffect(function(){
handleGettingUserCart()
},[])

  async function makeCashOrder(){
     const address={
details: detailsInput.current?.value ||'',
        phone:phoneInput.current?.value ||'' ,
        city:cityInput.current?.value ||'' 
     }
    
    const isSucceeded=await createCashOrder(cartId || '' ,address)
    if(isSucceeded){
      toast.success("ordered created successfully")
      // after paying making the cart count zero by useState method
      updateCartCount(0);
    }else{
      toast.error("Error occured while creating the ordered")
    }

  }

 async function makeOnlineOrder(){
  const address={
details: detailsInput.current?.value ||'',
        phone:phoneInput.current?.value ||'' ,
        city:cityInput.current?.value ||'' 
     }
   const res= await createCheckOutSession(cartId ||'', address)

if(res == false){
  toast.error("An error occured")
}else{
  window.open(res,'_self')
}

}

  
  return (
    <div className='w-1/2 mx-auto'>


     <div>
       <Label>City</Label>
       <Input ref={cityInput}></Input> 
        </div> 

     <div>
       <Label>Phone</Label>
       <Input ref={phoneInput} type='tel'></Input> 
        </div> 

     <div>
       <Label>Details</Label>
       <Input ref={detailsInput}></Input> 
        </div> 

          <Button onClick={makeCashOrder}  className='cursor-pointer mt-3' >Make cash Order</Button>
          <Button onClick={makeOnlineOrder}  className='cursor-pointer mt-3' >Make online Order</Button>

    </div>
  )
}
