
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.38.1';
import FirecrawlApp from 'https://esm.sh/@mendable/firecrawl-js';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

const extractPostId = (url: string) => {
  const match = url.match(/activity:(\d+)/);
  return match ? match[1] : null;
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
    const url = 'https://www.linkedin.com/company/dispositifidee/posts';

    console.log('Starting LinkedIn scrape for:', url);
    
    const result = await firecrawl.crawlUrl(url, {
      limit: 3,
      scrapeOptions: {
        selectors: [
          {
            name: 'posts',
            selector: 'a[href*="activity"]',
            type: 'list',
            attributes: ['href'],
          }
        ],
      }
    });

    if (!result.success || !result.data || !result.data.posts) {
      throw new Error('Failed to scrape LinkedIn posts');
    }

    // Format the data for the frontend
    const posts = result.data.posts
      .filter((post: any) => post.href && extractPostId(post.href))
      .map((post: any) => ({
        url: `https://www.linkedin.com/embed/feed/update/urn:li:activity:${extractPostId(post.href)}`,
        title: "Publication LinkedIn"
      }))
      .slice(0, 3);

    return new Response(
      JSON.stringify({ success: true, data: posts }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error('Error:', error.message);
    return new Response(
      JSON.stringify({ success: false, error: error.message }),
      { 
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    );
  }
});
