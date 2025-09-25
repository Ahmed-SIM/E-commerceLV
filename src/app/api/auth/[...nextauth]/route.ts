 // route handler !!!!!
 // VI note route handler remove the useage of page.tsx if it's exist (ya3ny ka2nha mosh maogoda )

import { NextResponse } from "next/server";


 // API handling => link + http method
 //keda 3amlna our own api
// by default browsers do GET method 
// any method must return backend response

// import { NextRequest, NextResponse } from "next/server"

// // keda 3malt method L GET for this route 
// export async function GET(request : NextRequest){
   // here you can do dataBASE queries => operations because your creating end point
   // you must return response
   // fetch() => call real API

//    const data=[
    //     {id:2 , age:10 , name:'ahmed'},
    //     {id:3 , age:44 , name:'badr'},
    //     {id:4 , age:33 , name:'ali'},
    //     {id:5 , age:22 , name:'hany'},
    // ]
    
    
    // //(request in parameter) is the user request so I can make validations in it like I
         //can check if it has token or no if yes return success and data if no return error 
        //     // return request.cookies.get('user-token')? NextResponse.json({
            //     //     message:'success',
            //     //     data:data
            //     // }) : NextResponse.json({
                //     //     message:'failed'
                //     // })
                // }
                
                
                // // // I could do POST method like this
                // // export function POST(){
            //   return NextResponse.  }
                
                
                // // advantages of route handler 
// //1-(making new end Point)=because I can call real APi in it and it become as wrapper for more security
                // // 2- control response shape like just give me the data not the whole object
              
                

                
                import { nextAuthConfig } from "@/next-auth/nextAuth.config";
                import NextAuth from "next-auth";
                
                // NextAuth() returns your route handler as an object 
                // // your route handler as an object
                const nextHandler =   NextAuth(nextAuthConfig)

                // export function GET(){}
                // export function POST(){}

                
                export {nextHandler as GET , nextHandler as POST}