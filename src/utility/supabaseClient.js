import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://hcxclytlmswzfvpvtsky.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhjeGNseXRsbXN3emZ2cHZ0c2t5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjEyMTI1OTcsImV4cCI6MjA3Njc4ODU5N30.I2EcqCjYU0SDRKRkQg73bSDwM170mZfiSBaQC9iPysc'

export const supabase = createClient(supabaseUrl, supabaseKey)
export default supabase;    
