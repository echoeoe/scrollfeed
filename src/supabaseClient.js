import { createClient } from '@supabase/supabase-js';

//supabase url and anon key 
const supabaseUrl = meta.env.VITE_SUPABASEURL;
const supabaseKey = meta.env.VITE_SUPABASEKEY;

//single reusable client 
export const supabase = createClient(
    supabaseUrl, 
    supabaseKey
);