import { blog } from "$lib/data/dataBlog";
import { error, redirect } from "@sveltejs/kit";

/** @type {import('./$types').PageLoad} */
export async function load({params}) {
   const res =  blog.find((e)=>{
       return e.id.toString()===params.id
    }) 
    if(!res) throw error(404,{
        message:"ora ono blog "
    })
    return{res}
}