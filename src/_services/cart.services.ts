'use server'; 
import { CartReSponseType } from "@/types/cart.types";
import { getMyUserToken } from "@/utils/utils";



export async function getUserCart():Promise<CartReSponseType>{
const token = await getMyUserToken();    
 const res=await fetch('https://ecommerce.routemisr.com/api/v1/cart',{
    headers:{
        token:token as string,
    },
    // cache:'force-cache'
    cache: 'no-store'
  })

const final=await res.json()

// const {numOfCartItems ,data:{products , totalCartPrice},cartId }=final;

const { numOfCartItems, data } = final;
const { products, totalCartPrice, _id: cartId } = data;

return {
    numOfCartItems,products , totalCartPrice,cartId
}
}