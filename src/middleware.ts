

// middleware page must be behind the app folder
// this function will be excuted in between of any request to ''any page'' and the response of it

import { getServerSession } from "next-auth";
import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

// ay request by7sal btgabholak ka parameter
export default async function middleware(req:NextRequest) {
    const jwt = await getToken({req})
 
        if(jwt){
        return NextResponse.next();
}else{

    return NextResponse.redirect(`${process.env.MY_DOMAIN}/login`)
}



}

export const config ={
matcher:['/cart:path*']
}