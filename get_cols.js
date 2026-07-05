import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://benlhtyzfbavwuzgrrsz.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJlbmxodHl6ZmJhdnd1emdycnN6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODEwMjE5NTgsImV4cCI6MjA5NjU5Nzk1OH0.YgpCev0rHqSYfGcplFWF5RHE77v7WevFsih_Sw9bZus';

const supabase = createClient(supabaseUrl, supabaseKey);

async function run() {
  console.log('Querying investments table columns...');
  // We can query the information_schema via a rpc or see if we can do a query that tells us.
  // Wait! In Supabase, if we have execute_sql RPC or similar, we can run it.
  // Let's see if we can execute a custom SQL via a RPC like 'execute_sql' or similar:
  const { data, error } = await supabase.rpc('execute_sql', {
    query: "SELECT column_name, data_type, is_nullable FROM information_schema.columns WHERE table_name = 'investments';"
  });
  
  if (error) {
    console.log('RPC execute_sql failed. Trying basic insertion to see schema or another way.');
    console.log(error);
  } else {
    console.log('Columns:', data);
  }
}

run().catch(console.error);
