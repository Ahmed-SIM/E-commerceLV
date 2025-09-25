// to apply server action
'use server' 

import { cookies } from 'next/headers';
import { loginFormType } from './login.types';



export async function  handleLogin(   data:loginFormType  ){


 

    try {
 
  
const res=await fetch(`https://ecommerce.routemisr.com/api/v1/auth/signin`,{
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
