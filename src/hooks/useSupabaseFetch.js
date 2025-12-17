import { useEffect, useState } from "react";
import { supabase } from "../utils/supabaseClient";

export function useSupabaseFetch(tableName){

  //state variables: data from table, loading boolean, error
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

}
