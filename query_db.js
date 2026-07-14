import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://benlhtyzfbavwuzgrrsz.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJlbmxodHl6ZmJhdnd1emdycnN6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODEwMjE5NTgsImV4cCI6MjA5NjU5Nzk1OH0.YgpCev0rHqSYfGcplFWF5RHE77v7WevFsih_Sw9bZus';

const supabase = createClient(supabaseUrl, supabaseKey);

async function run() {
  console.log('Querying profile.kyc_status...');
  const { data, error } = await supabase
    .from('profiles')
    .select('id, kyc_status')
    .limit(1);
    
  console.log('Result:', data);
  console.log('Error:', error);
}

run().catch(console.error);
