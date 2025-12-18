import { useEffect, useState } from "react";
import { supabase } from "../utils/supabaseClient";

export function useSupabaseFetch(tableName){

  //state variables: data from table, loading boolean, error
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(()=>{

    //side effect
    console.log('in useEffect side effect logic'); //test
    
    //set states - prevent loading bug, reset error 
    setLoading(true);
    setError(null);

    //build query 
    let query = supabase.from('posts').select();

    //fetch data 

  }, [tableName]); //useEffect dependencies  
}
