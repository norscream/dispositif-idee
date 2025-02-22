
import { createClient } from '@supabase/supabase-js';

export const supabase = createClient(
  process.env.VITE_SUPABASE_URL || 'https://fiqlxudrjerawlbndkyj.supabase.co',
  process.env.VITE_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZpcWx4dWRyamVyYXdsYm5ka3lqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDU5MjIxMTgsImV4cCI6MjAyMTQ5ODExOH0.FN5j5PBKTqDO12tXuM1zxbdiKt7sQ7oYfmO2qvVQSzQ'
);
