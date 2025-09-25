 'use server'
 
 // get All categiris to display
 export async function getAllCategories(){

   const res = await  fetch('https://ecommerce.routemisr.com/api/v1/categories')
const finalRes=await res.json();
console.log('All categories',finalRes.data)
return finalRes.data;
}



export async function GetSpecificSubCategory(id:string){

   const res = await  fetch(`https://ecommerce.routemisr.com/api/v1/categories/${id}/subcategories`)
const finalRes=await res.json();
console.log('All categories',finalRes.data)
return finalRes.data;
}


