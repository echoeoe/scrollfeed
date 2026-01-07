import { createContext, useContext, useEffect, useState } from "react";
import { supabase } from "../utils/supabaseClient";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true); 
    const [signupError, setSignupError] = useState(null);

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

    //sign in method 
    const signIn = async (email, password) => {

        const { data, error } = await supabase.auth.signInWithPassword({email, password});

        if (error) throw error;
    }

    //sign up method
    const signUp = async (email, password) => {
        setSignupError(null);
        const { data, error } = await supabase.auth.signUp({email, password});

        if (error){
            setSignupError(error.message);
            return {success: false};
        }

        setUser(data.user?? null);
        return { success: true };
    };
    
    return (<AuthContext.Provider value = {{user, loading, signIn, signUp, signupError}}>
        {children}
        </AuthContext.Provider>);
};

export const useAuth = () => {
    return useContext(AuthContext);
};