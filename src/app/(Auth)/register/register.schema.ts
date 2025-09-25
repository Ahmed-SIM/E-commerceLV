import * as zod from 'zod';
  
export const schema =zod.object({
name:zod.string().nonempty("Name is required").min(3,'Name must be at least 3 characters').max(12,"Maximum characters is 12"),
email:zod.email().nonempty(),
password:zod.string().nonempty("Password is required"),
rePassword:zod.string().nonempty("Confirm your Password"),
phone:zod.string().nonempty("Phone Number is required").regex(/^01[0125][0-9]{8}/,"Invalid phone number"),
}).refine(function({password,rePassword}){
   
return password === rePassword 

},{path:['rePassword'],error:"Password must match rePassword"})


