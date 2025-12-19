import { useEffect, useState } from "react";
import { supabase } from "../utils/supabaseClient";

export function useSupabaseFetch(tableName){

  //state variables: data from table, loading boolean, error
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(()=>{

    //side effect
    async function fetchData(){ 
      
      //set states - prevent loading bug, reset error 
      setLoading(true);
      setError(null);

      //build query 
      let query = supabase.from('posts').select();

      // try catch around fetch 
      try {
        //fetch data
        const {data: fetchedData, error: fetchError} = await query;
        setData(fetchedData);
        // console.log("fetched data", fetchedData);

        if (fetchError){
          throw fetchError;
        }
      } catch(err){
        console.error("Supabase error:", err);
        setError(err);
      } finally{
        setLoading(false);
      }
    }

    fetchData(); 

  }, [tableName]); //useEffect dependencies  

  return {data, loading, error};
}
