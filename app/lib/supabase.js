import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://rgibcfmzklttmwfgkchl.supabase.co'
const supabaseKey = 'sb_publishable_ACRGOCdounoExwiYY-IA-Q_yflzPIzT'

export const supabase = createClient(supabaseUrl, supabaseKey)