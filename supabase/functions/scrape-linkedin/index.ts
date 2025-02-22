
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.38.1';
import FirecrawlApp from 'https://esm.sh/@mendable/firecrawl-js';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const apiKey = Deno.env.get('FIRECRAWL_API_KEY');
    if (!apiKey) {
      throw new Error('FIRECRAWL_API_KEY not found');
    }

    const firecrawl = new FirecrawlApp({ apiKey });
    const url = 'https://www.linkedin.com/company/dispositifidee';

    console.log('Starting LinkedIn scrape for:', url);
    
    const result = await firecrawl.crawlUrl(url, {
      limit: 3,
      scrapeOptions: {
        formats: ['markdown', 'html'],
      }
    });

    if (!result.success) {
      throw new Error('Failed to scrape LinkedIn');
    }

    return new Response(JSON.stringify(result), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error:', error.message);
    return new Response(
      JSON.stringify({ error: error.message }),
      { 
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    );
  }
});
