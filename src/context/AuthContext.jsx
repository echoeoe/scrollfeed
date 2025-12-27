import { createContext, useContext, useEffect, useState } from "react";
import { supabase } from "../utils/supabaseClient";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true); 

    useEffect(()=>{
        const loadSession = async () => {
            const{
                data: {session}, 
                error
            } = await supabase.auth.getSession();

            setUser(session?.user ?? null);
            setLoading(false);
        }   

        loadSession();

    }, []);
    
    return (<>{children}</>);
};