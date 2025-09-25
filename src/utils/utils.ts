import { decode } from "next-auth/jwt";
import { cookies } from "next/headers";

 export async function getMyUserToken(){

const cookie =await cookies();
 const sessionToken=cookie.get('next-auth.session-token')?.value;

//  now I have token and I want to decode it by the secret key in env file
// I could have do process.env.NEXTAUTH_SECRET! => means the value will not be null or undifined Iam sure
 const decodedJwt =await decode({token:sessionToken , secret:process.env.NEXTAUTH_SECRET ||"" })

 return decodedJwt?.credentialsToken;
}