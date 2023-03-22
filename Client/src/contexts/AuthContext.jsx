import { createContext, useEffect, useState } from "react";
import { supabase } from "../supabase/supabaseConfig";


export const AuthContext = createContext();

export default function AuthProvider({children}){

    const [user, setUser] = useState();

    useEffect(()=>{
        supabase.auth.onAuthStateChange((event,session) => {
            if(event === "SIGNED_IN"){
                setUser({user: session.user, accessToken: session.access_token})
            }
        })
    },[])

    return(
        <AuthContext.Provider value={[user, setUser]}>
            {children}
        </AuthContext.Provider>
    )
}