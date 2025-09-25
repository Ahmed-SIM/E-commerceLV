"use server"
// API that will give me the array I will display
import { getMyUserToken } from "@/utils/utils"



// this is a function to get all items in the wish List 
  export async function getAllWishListProducts(){
  const token=await  getMyUserToken()
     const  res=await fetch(`https://ecommerce.routemisr.com/api/v1/wishlist`,{
        headers:{
             'Content-type':'application/json',
            token:token as string,
        }
    })

const finalRes=await res.json()

console.log('All wish List items response ',finalRes)

if(finalRes.status == 'success'){
    
    return finalRes.data;
}else{
    return false;
}


}


// function to add items to wish list
export async function addItemToWishList(productId:string){

const token =  await getMyUserToken();

if(token){
    
    const res= await fetch('https://ecommerce.routemisr.com/api/v1/wishlist',
    {
     method:'POST',
          body:JSON.stringify({
            productId:productId
        }),
    headers:{
        'Content-type':'application/json',
        token: token as string,
    }
    }
    
    )
     const finalRes= await res.json();

return finalRes;

     
}



}




// function to remove items from wish list
export async function removeItemToWishList(productId:string){


const token =  await getMyUserToken();

if(token){
    
    const res= await fetch(`https://ecommerce.routemisr.com/api/v1/wishlist/${productId}`,
    {
     method:'DELETE',
          body:JSON.stringify({productId}),
    headers:{
        'Content-type':'application/json',
        token: token as string,
    }
    }
    
    )
     const finalRes= await res.json();
     if(finalRes.status ==='success'){        
return true;
     }else{
return false;
     }
}
}


