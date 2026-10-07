import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const supabaseUrl = 'https://hlkxzrgftpwdieljebim.supabase.co'
const supabasePublishableKey ='sb_publishable_dMVuJtEfq-h8OXFp_C6s2w_FwE0KXMd'

export const supabase = createClient(
  supabaseUrl,
  supabasePublishableKey
)

window.supabaseTest = supabase