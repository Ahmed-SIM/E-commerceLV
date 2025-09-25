import { jwtDecode } from "jwt-decode";
import { NextAuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";



// 3ashan t2dar tahandel this operations lazem tahandel route handler W tab3atloo this configration
export const nextAuthConfig: NextAuthOptions = {
  providers: [
    Credentials({
      name: "Fresh card",
      // the data I will take it from the user {L 7aga elly L user 7ayda5lhally fy L form {email , password}}
      // login function takes as a parameter the object of email and password of the user (credentials) and inside the function fetching the data
      authorize: async function (credentials,req) {
        //authorize function is the function that will handle log in proccess
        // fetching the data to make request to do login
        // this function must return null(not authenticated email or password wrong) or object(authenticated) 
        //credentials parameter => the data which the user inputed to log in  
        
        const res = await fetch('https://ecommerce.routemisr.com/api/v1/auth/signin', {
          method: "post",
          body: JSON.stringify(credentials),
          headers: { "content-type": "application/json" },
        });

        const finalRes = await res.json();
        console.log("final response authorize", finalRes);

        if (finalRes.message == "success") {
          //  distruct L role w put L ba2yy fyy L rest
          const { role, ...restData } = finalRes.user;

          // I used the library jwt-decode to use this function that takes the BE token and decode it then return
          //an object for me that include the data inside it the user id so I can use the user ID in the return
         const decodedObject:{id:string} =jwtDecode(finalRes.token)

        return{
          id:decodedObject.id,
          name:finalRes.user.name,
          email:finalRes.user.email,
          credentialsToken:finalRes.token
          
        }
        
          // return restData;
        }

        return null;
      },


      credentials: {
        // here I write the field I want him to display to the user to fill it
        // these all useless because I will apply my login page
        // email: { label: "Email", type: "email", placeholder: "ahmed@122" },
        // password: { label: "Password", type: "password" },
         email: { },
        password: { },
      }




    }),
  ],


  // optional // you can exchang these pages with pages you made
  pages: {
    // when inter log in page navigate him to my log in page
    signIn: "/login",
    // ممكن كمان تحدد صفحة error عشان لو حصل fail مينزلش 404
    error: "/login",
  },


// callBacks => functions sent as an argument because it will be excuted at some point
callbacks:{
 
  // jwt => json web token
  // this function will be excuted after successfull login and (each navigate after login)
  // it takes an object as a parameter 
  jwt(params){
   
    //params.user authenticated user that you sent after the login proccess (will be only after successful log in)
    // params.token =>(object) by default represent=> default user 
    /*
params.token => is a mutable object to handle structuring the object (will represent the data) 
will be incrypted by secret key
    */

// L token object fyy shwaya properties mafhomsh L credentialsToken so ana lma a3mal .credentialsToken 7ay3mal
//property it's name is credentialsToken in the token object
// lazem 3ashan I can acess the token params.user.credentialsToken; send it in return frist 

// law fy user a3mal keda not to cause error
if(params.user){
params.token.credentialsToken=params.user.credentialsToken;
params.token.userId=params.user.id;

}


// then you should returns the token object
// this object will be used =>
// 1-when you decode the token
// 2- when be accessable on the server 
return params.token;

  },

  // function will be called every time you will require the user session
  //session => period time that express that the user is authenticated (it is an object represent the authenticated user)
  // you have 3 ways to have a user session 
     //1-useSession {hook (client side)}
     //2-getServerSession()
     //3-api/auth/session
  session(params) {
   
   // make new field in the session object name id
params.session.user.id=params.token.userId;
//session is mutable object represent user data inside the client side
// you have to return the session
return params.session;

  },


},
session:{

  strategy:'jwt',
  // L seesion 7atfdal sha8ala lmoda one dayz
  maxAge:60*60*24
},


secret: process.env.NEXTAUTH_SECRET,


};
