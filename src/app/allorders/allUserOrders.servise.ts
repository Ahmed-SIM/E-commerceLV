
'use server'
 export async function getAllUserOrders(userId:string){
  const res=await fetch(`https://ecommerce.routemisr.com/api/v1/orders/user/${userId}`)
const finalRes=await res.json();
console.log('all user orders',finalRes)
return finalRes

}


