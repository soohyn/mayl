import { supabaseClient } from "./supabaseClient"

export async function getSession () {
  try{
    const response = await supabaseClient().auth.getSession()
    
    if(response.error) throw new Error();

    return response.data.session
  }catch(error){
    console.error(error);
  }
}
