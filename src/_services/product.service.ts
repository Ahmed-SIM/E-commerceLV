
  // because of our function async & await we should put the return in a promise

import { ProductType } from "@/app/_components/_interfaces/interfaces";

 
 export async function getAllProducts(): Promise<ProductType[] | null> {
    try {
      const res = await fetch(
        "https://ecommerce.routemisr.com/api/v1/products" ,{cache:"force-cache"});
      const finalRes = await res.json();
      // console.log('final result',finalRes.data)
      // this is the array of all data
      return finalRes.data;
    } catch (error) {
      console.log("error", error);
      return null;
    }
  }


   export async function getSpecifiedProduct(id:string): Promise<ProductType| null> {
    try {
      const res = await fetch(
        `https://ecommerce.routemisr.com/api/v1/products/${id}`);
      const finalRes = await res.json();
      // console.log('final result',finalRes.data)
        return finalRes.data;
    
    } catch (error) {
      console.log("error", error);
      return null;
    }
  }