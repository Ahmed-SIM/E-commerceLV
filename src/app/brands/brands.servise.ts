export async function getBrandsApi() {
  const res = await fetch(`https://ecommerce.routemisr.com/api/v1/brands`);
  const allBrands = await res.json();
  return allBrands.data;  
}
