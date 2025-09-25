'use client'  
import { Button } from '@/components/ui/button';  
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'  
import { Input } from '@/components/ui/input';  
import { zodResolver } from '@hookform/resolvers/zod';  
import React, { useState } from 'react'  
import { useForm } from 'react-hook-form';  
import { schema } from './register.schema';  
import { RegisterFormType } from './register.types';  
import { handleRegister } from './register.actions';  
import { toast } from 'sonner';  
import {  Eye, EyeOff, FolderPen } from 'lucide-react';  // 👁 icons
import { useRouter } from 'next/navigation';

export default function Register() {  

  

const router = useRouter();


  const rhfObj= useForm<RegisterFormType>({  
    resolver:zodResolver(schema)   
  });  

  const {control,handleSubmit}=rhfObj;    

  // 🔑 state for show/hide password
  const [showPassword, setShowPassword] = useState(false);
  const [showRePassword, setShowRePassword] = useState(false);

  async function myHandleSubmit(data:RegisterFormType){ 
    console.log('data',data);  

    const resOutPut =await handleRegister(data) ;  

    if( resOutPut === true ){  
      toast.success("Registered successfully",{position:'top-center',duration:3000})  
      // NAVIGATE to log in page 
      router.push('/login') 
    }else{   
      toast.error(resOutPut,{position:'top-center',duration:3000})  
    }  
  }       

  return (  
    <div className="w-full max-w-3xl mx-auto mt-12 bg-white shadow-lg rounded-2xl p-8 border border-gray-200">  
      <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">Register Now</h1>  

      <Form {...rhfObj}>  
        {/* I put my own form tag because the <Form></Form> is just a wrapper component like a div and I can Not link hadle submit with it */}  
        <form onSubmit={handleSubmit(myHandleSubmit)} className="space-y-5">  

          <FormField  
            control={control}  
            name="name"  
            render={({field}) => (  
              <FormItem>  
                <FormLabel className="text-gray-700 font-medium">user name</FormLabel >  
                <FormControl>  
                  { /* Your form field */}  
                  <Input {...field} className="rounded-lg border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200"/>  
                </FormControl>  
                <FormDescription />  
                <FormMessage className="text-red-500 text-sm" />  
              </FormItem>  
            )}  
          />  

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
                      type={showPassword ? 'text' : 'password'}  
                      className="rounded-lg border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200 pr-10"  
                    />  
                    <button  
                      type="button"  
                      onClick={() => setShowPassword(!showPassword)}  
                      className="absolute inset-y-0 right-2 flex items-center text-gray-500 hover:text-gray-700"  
                    >  
                      {showPassword ? <EyeOff size={18}/> : <Eye size={18}/>}  
                    </button>  
                  </div>  
                </FormControl>  
                <FormDescription />  
                <FormMessage className="text-red-500 text-sm" />  
              </FormItem>  
            )}  
          />  

          {/* Confirm Password with show/hide button */}
          <FormField  
            control={control}  
            name="rePassword"  
            render={({field}) => (  
              <FormItem>  
                <FormLabel className="text-gray-700 font-medium">Confirm password </FormLabel >  
                <FormControl>  
                  { /* Your form field */}  
                  <div className="relative">  
                    <Input  
                      {...field}  
                      type={showRePassword ? 'text' : 'password'}  
                      className="rounded-lg border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200 pr-10"  
                    />  
                    <button  
                      type="button"  
                      onClick={() => setShowRePassword(!showRePassword)}  
                      className="absolute inset-y-0 right-2 flex items-center text-gray-500 hover:text-gray-700"  
                    >  
                      {showRePassword ? <EyeOff size={18}/> : <Eye size={18}/>}  
                    </button>  
                  </div>  
                </FormControl>  
                <FormDescription />  
                <FormMessage className="text-red-500 text-sm" />  
              </FormItem>  
            )}  
          />  

          <FormField  
            control={control}  
            name="phone"  
            render={({field}) => (  
              <FormItem>  
                <FormLabel className="text-gray-700 font-medium">User phone number</FormLabel >  
                <FormControl>  
                  { /* Your form field */}  
                  <Input {...field} type='tel' className="rounded-lg border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200"/>  
                </FormControl>  
                <FormDescription />  
                <FormMessage className="text-red-500 text-sm" />  
              </FormItem>  
            )}  
          />  

          <Button className='w-full mt-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow-md transition-all duration-300 cursor-pointer'>Register</Button>  
        </form>  
      </Form>  
    </div>  
  )  
}  
