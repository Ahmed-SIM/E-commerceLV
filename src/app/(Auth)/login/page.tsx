'use client'  
import { Button } from '@/components/ui/button';  
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'  
import { Input } from '@/components/ui/input';  
import React, { useState } from 'react'  
import { useForm } from 'react-hook-form';  
import { toast } from 'sonner';  
import { loginFormType } from './login.types';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function Login() {  

// it's a hook to navigate the user to any page you want it's imported from next it returns object 
// we use the object not the hook because we can not use hooks out side functions component's scope
  const router= useRouter();

  const rhfObj= useForm<loginFormType>({  
    // resolver:zodResolver()   
  });  

  const {control,handleSubmit}=rhfObj;    


  async function myHandleSubmit(data:loginFormType){ 
    // console.log('data',data);  

    // way without nextAuth library
//   const resOutPut  = await handleLogin(data)
// if( resOutPut  ){  
//       toast.success("Welcome back",{position:'top-center',duration:3000})  
//       // NAVIGATE to home page
//       router.push('/')  
//       window.location.href= '/';
//     }else{   
//       toast.error('Email or password are in-correct',{position:'top-center',duration:3000})  
//     } 


// nextAuth library way
    const res= await signIn('credentials',{...data , redirect: false})

if( res?.ok  ){  
      toast.success("Welcome back",{position:'top-center',duration:3000})  
      // NAVIGATE to home page
      // L router bta3mal navigate without refresh and I need refresh 3ashan a7ot L token so we will use window.location.href()
      // router.push('/')  
      window.location.href= '/';
    }else{   
      toast.error('Email or password are in-correct',{position:'top-center',duration:3000})  
    }

}


    // signIn('credentials',{email: data.email ,password: data.password})
    // signIn('credentials',{...data , redirect: true, callbackUrl:'/home'})



//     const res= await signIn('credentials',{...data , redirect: false})

// if( res?.ok  ){  
//       toast.success("Welcome back",{position:'top-center',duration:3000})  
//       // NAVIGATE to home page
//       router.push('/')  
//       window.location.href= '/';
//     }else{   
//       toast.error('Email or password are in-correct',{position:'top-center',duration:3000})  
//     }  }

    
  

  return (  
    <div className="w-full max-w-3xl mx-auto mt-12 bg-white shadow-lg rounded-2xl p-8 border border-gray-200">  
      <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">Login Now</h1>  

      <Form {...rhfObj}>  
        {/* I put my own form tag because the <Form></Form> is just a wrapper component like a div and I can Not link hadle submit with it */}  
        <form onSubmit={handleSubmit(myHandleSubmit)} className="space-y-5">  

          

          <FormField  
            control={control}  
            name="email"  
            render={({field}) => (  
              <FormItem>  
                <FormLabel className="text-gray-700 font-medium">Email </FormLabel >  
                <FormControl>  
                  { /* Your form field */}  
                  <Input {...field} type='email' className="rounded-lg border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200"/>  
                </FormControl>  
                <FormDescription />  
                <FormMessage className="text-red-500 text-sm" />  
              </FormItem>  
            )}  
          />  

          {/* Password with show/hide button */}
          <FormField  
            control={control}  
            name="password"  
            render={({field}) => (  
              <FormItem>  
                <FormLabel className="text-gray-700 font-medium">Password </FormLabel >  
                <FormControl>  
                  { /* Your form field */}  
                  <div className="relative">  
                    <Input  
                      {...field}  
                    
                      className="rounded-lg border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200 pr-10"  
                    />  
                    <button  
                      type="button"  
                 
                      className="absolute inset-y-0 right-2 flex items-center text-gray-500 hover:text-gray-700"  
                    >  
                   
                    </button>  
                  </div>  
                </FormControl>  
                <FormDescription />  
                <FormMessage className="text-red-500 text-sm" />  
              </FormItem>  
            )}  
          />  


          
          <Button className='w-full mt-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow-md transition-all duration-300 cursor-pointer'>Login</Button>  
        </form>  
      </Form>  

<div className=' m-3  text-center '>
<Link className='bg-blue-500 text-white text-[17px] rounded-3xl p-2 ' href={'/insirtEmail'} >Forgot your password ?</Link>
</div>

    </div>  
  )  

}