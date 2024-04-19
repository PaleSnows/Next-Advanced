import { cookies, headers } from "next/headers";
import { type NextRequest } from "next/server";

export async function GET(request:NextRequest){
    const requestHeader = new Headers(request.headers)
    const headerList = headers()

    cookies().set("resultsPerPage","20")
    const theme = request.cookies.get("theme")
    console.log(requestHeader.get("Authorization"));
    console.log(headerList.get("Authorization"));
    console.log(cookies().get("resultsPerPage"));
    
    
    return new Response("Profile api",{headers:{
        "Content-Type":"text/html",
        "Set-cookie":"theme=dark"
    }})
}