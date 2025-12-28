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
                console.log(session?.user); //console
            }
            catch(err){
                console.error("auth error:", err);
                setUser(null);
            } finally{
                setLoading(false);
            }
        }   

        loadSession();
    }, []);
    
    return (<AuthContext.Provider value = {{user, loading}}>
        {children}
        </AuthContext.Provider>);
};