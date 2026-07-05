import { c as createClient } from "../_libs/supabase__supabase-js.mjs";
const supabaseUrl = "https://benlhtyzfbavwuzgrrsz.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJlbmxodHl6ZmJhdnd1emdycnN6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODEwMjE5NTgsImV4cCI6MjA5NjU5Nzk1OH0.YgpCev0rHqSYfGcplFWF5RHE77v7WevFsih_Sw9bZus";
const supabase = createClient(supabaseUrl, supabaseKey);
export {
  supabase as s
};
