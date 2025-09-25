'use server'

import { getMyUserToken } from "@/utils/utils"
import { revalidatePath } from "next/cache"

export type shippingAddressType={ 
        details: string,
        phone: string,
        city: string
        }    


  export async function createCashOrder(cartId:string , shippingAddress:shippingAddressType){
    const token=await getMyUserToken()
    const res= await fetch(`https://ecommerce.routemisr.com/api/v1/orders/${cartId}`,{
    headers:{
      token:token as string,
      "Content-Type":"application/json"
    }
    ,method:'post',
    body:JSON.stringify({shippingAddress})
   }) 
   const final = await res.json();
   if(final.status == 'success'){
    revalidatePath('/cart')
    return true
   }else{
    return false
   }


}


export async function createCheckOutSession(cartId:string , shippingAddress:shippingAddressType){
 
  const token=await getMyUserToken();
   const res = await fetch(`https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${cartId}?url=http://localhost:3000`,{

    method:'post',
    body: JSON.stringify({shippingAddress})  ,
    headers:{
       "Content-Type":"application/json",
      token:token as string
    }
   })

const finalRes= await res.json();

if(finalRes.status == 'success'){
  return finalRes.session.url

}else{
return false;
}

}
