import { createClient } from '@supabase/supabase-js';

//supabase url and anon key 
const supabaseUrl = 'https://kbdknbqxoxsglqhcxbut.supabase.co';
const supabaseKey = 'placeholder';

//single reusable client 
export const supabase = createClient(supabaseUrl, supabaseKey);
