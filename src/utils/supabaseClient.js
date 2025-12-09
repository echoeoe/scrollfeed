import { createClient } from '@supabase/supabase-js';

//supabase url and anon key 
const supabaseUrl = meta.env.VITE_SUPABASE_URL;
const supabaseKey = meta.env.VITE_SUPABASE_ANON_KEY;

// single reusable client 
export const supabase = createClient(
    supabaseUrl, 
    supabaseKey
);