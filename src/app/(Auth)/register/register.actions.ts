// to apply server action
'use server' 

import { cookies } from 'next/headers';
   

import { RegisterFormType } from './register.types';

export async function  handleRegister(   data:RegisterFormType  ){

    try {
 
  
const res=await fetch(`https://ecommerce.routemisr.com/api/v1/auth/signup`,{
  method:'POST',
  body:JSON.stringify(data),


  // we have to do this because we send data in JSON.stringify(data), 
  headers:{
    'Content-type':'application/json'
  }
})
const finalRes=await res.json();
console.log("final res",finalRes)

if(finalRes.message === 'success'){
    
const cookie = await cookies();  
  cookie.set('user-token',finalRes.token,{
    httpOnly:true,
    sameSite:'strict',
    maxAge: 60*60*24*7
  })
  return true

}else{
    return finalRes.message
}


} catch (error) {
 console.log("error",error) 
}



}
