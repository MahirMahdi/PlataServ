import useAuth from "./useAuth";
import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://xzqwvstecbjuqyaroyxd.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh6cXd2c3RlY2JqdXF5YXJveXhkIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Nzg5OTMwOTcsImV4cCI6MTk5NDU2OTA5N30.CHC4VkgUDIK5ia1YovvqcOqjc8RcHJhKYjbHJ-7AH7w'
const supabase = createClient(supabaseUrl, supabaseKey)


export default function useRefreshToken(){

    const [setUser] = useAuth();

    //function for fetching new access token if access token expires.
    async function refresh(){
        const { data, error } = await supabase.auth.refreshSession()
        const { session, user } = data
        
        //set user state with new access token
        setUser({user:user, accessToken: session.access_token});

        return session.access_token
    }

    return refresh;
}
