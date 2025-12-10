import { createClient } from '@supabase/supabase-js';

//supabase url and anon key 
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// single reusable client 
export const supabase = createClient(
    supabaseUrl, 
    supabaseKey
);