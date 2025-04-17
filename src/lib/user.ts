import { Session } from "@supabase/supabase-js";
import { supabaseClient } from "./supabaseClient";

const STORAGE_KEY = 'session'

export async function getSession() {
  try {
    const storageSession = sessionStorage.getItem(STORAGE_KEY)

    if(storageSession){
      const session = JSON.parse(storageSession)
      return session
    }

    const response = await supabaseClient().auth.getSession();

    if (response.error) throw new Error();

    return response.data.session;
  } catch (error) {
    console.error(error);
  }
}

export const setSessionStorage = (session:Session)=>{
  sessionStorage.setItem(STORAGE_KEY,JSON.stringify(session))
}

export const removeSessionStorage =()=>{
  sessionStorage.removeItem(STORAGE_KEY)
}