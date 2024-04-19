import { NextRequest } from "next/server";
import { comments } from "./data";

export async function GET(request:NextRequest){
    //initializing method to access searchbar
    const searchParams= request.nextUrl.searchParams
    //taking query parameters from searchbar
    const query = searchParams.get("query")
    //filtering and showing result accoring to user query
    const filteredComments = query ? comments.filter((comment)=>comment.text.includes(query)):comments
    return Response.json(filteredComments)
}
export async function POST(request:Request){
    const comment = await request.json()
    const newComment = {
        id:comments.length+1,
        text:comment.text
    }
    comments.push(newComment)
    return  new Response(JSON.stringify(newComment),{
        headers:{
            "Content_Type":"application/json"
        },
        status:201
    })
}

