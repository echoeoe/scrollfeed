import { createContext, useContext, useEffect, useState } from "react";
import { supabase } from "../utils/supabaseClient";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true); 

    useEffect(()=>{
        const loadSession = async () => {
            try{ //get session data
                const{  
                data: {session}, 
                error
                } = await supabase.auth.getSession();

                //throw error
                if (error) throw error;

                setUser(session?.user ?? null);
                // console.log("user:", session?.user); //console
            }
            catch(err){
                console.error("auth error:", err);
                setUser(null);
            } finally{
                setLoading(false);
            }
        }   

        loadSession();

        //sync auth changes
        const {data: {subscription} } = supabase.auth.onAuthStateChange((_event, session) => {
            setUser(session?.user ?? null);
        });

        return () => subscription.unsubscribe();

    }, []);
    
    return (<AuthContext.Provider value = {{user, loading, signIn}}>
        {children}
        </AuthContext.Provider>);
};

//sign in method 
const signIn = async (email, password) => {
    const { data, error } = await supabase.auth.signInWithPassword({email, password});
    if (error) throw error;
}

export const useAuth = () => {
    return useContext(AuthContext);
};