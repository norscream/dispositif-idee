
import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { Resend } from "npm:resend@2.0.0"

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version',
}

// Simple in-memory rate limiting (per edge function instance)
const requestCounts = new Map<string, { count: number; resetAt: number }>();

function checkRateLimit(ip: string, maxRequests = 5, windowMs = 60000): boolean {
  const now = Date.now();
  const record = requestCounts.get(ip);

  if (!record || now > record.resetAt) {
    requestCounts.set(ip, { count: 1, resetAt: now + windowMs });
    return true;
  }

  if (record.count >= maxRequests) {
    return false;
  }

  record.count++;
  return true;
}

// Clean up old entries periodically to prevent memory leaks
function cleanupRateLimits() {
  const now = Date.now();
  for (const [key, value] of requestCounts.entries()) {
    if (now > value.resetAt) {
      requestCounts.delete(key);
    }
  }
}

// HTML escape utility to prevent injection in emails
function escapeHtml(unsafe: string): string {
  return unsafe
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

// Input validation
function validateInput(data: Record<string, unknown>): string | null {
  if (!data.fullName || typeof data.fullName !== 'string' || data.fullName.length < 2 || data.fullName.length > 200) {
    return 'Invalid name';
  }
  if (!data.email || typeof data.email !== 'string' || !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(data.email)) {
    return 'Invalid email';
  }
  if (!data.requestType || typeof data.requestType !== 'string' || data.requestType.length > 200) {
    return 'Invalid request type';
  }
  if (!data.message || typeof data.message !== 'string' || data.message.length < 10 || data.message.length > 5000) {
    return 'Invalid message';
  }
  if (data.phone && (typeof data.phone !== 'string' || data.phone.length > 30)) {
    return 'Invalid phone number';
  }
  if (data.region && (typeof data.region !== 'string' || data.region.length > 200)) {
    return 'Invalid region';
  }
  if (data.specificAction && (typeof data.specificAction !== 'string' || data.specificAction.length > 200)) {
    return 'Invalid specific action';
  }
  return null;
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders });
  }

  try {
    // Rate limiting check
    const clientIp = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'unknown';
    cleanupRateLimits();

    if (!checkRateLimit(clientIp)) {
      console.warn(`Rate limit exceeded for IP: ${clientIp}`);
      return new Response(
        JSON.stringify({ error: 'Trop de requêtes. Veuillez réessayer dans quelques instants.' }),
        { status: 429, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const data = await req.json();

    // Validate all inputs
    const validationError = validateInput(data);
    if (validationError) {
      console.warn('Validation failed:', validationError);
      return new Response(
        JSON.stringify({ error: 'Données invalides. Veuillez vérifier le formulaire.' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    console.log('Received contact form data:', {
      fullName: data.fullName,
      email: data.email,
      requestType: data.requestType,
    });

    // Initialize Resend with the API key
    const resendApiKey = Deno.env.get('RESEND_API_KEY');
    if (!resendApiKey) {
      console.error('RESEND_API_KEY is not set');
      throw new Error('Configuration error: RESEND_API_KEY is missing');
    }

    const resend = new Resend(resendApiKey);
    
    console.log('Sending email to projet.idee@ac-lille.fr...');

    // Construction du message HTML with escaped user inputs
    const emailHtml = `
      <h2>Nouveau message de contact - IDÉE</h2>
      <p><strong>Nom:</strong> ${escapeHtml(data.fullName)}</p>
      <p><strong>Email:</strong> ${escapeHtml(data.email)}</p>
      ${data.phone ? `<p><strong>Téléphone:</strong> ${escapeHtml(data.phone)}</p>` : ''}
      ${data.region ? `<p><strong>Zone géographique:</strong> ${escapeHtml(data.region)}</p>` : ''}
      <p><strong>Type de demande:</strong> ${escapeHtml(data.requestType)}</p>
      ${data.specificAction ? `<p><strong>Action spécifique:</strong> ${escapeHtml(data.specificAction)}</p>` : ''}
      <h3>Message:</h3>
      <p>${escapeHtml(data.message).replace(/\n/g, '<br>')}</p>
    `;
    
    // Envoyer l'email à l'équipe IDÉE
    const result = await resend.emails.send({
      from: 'IDÉE Contact <onboarding@resend.dev>',
      to: ['projet.idee@ac-lille.fr'],
      reply_to: data.email,
      subject: `[Contact IDÉE] ${escapeHtml(data.requestType)} - ${escapeHtml(data.fullName)}`,
      html: emailHtml
    });

    console.log('Email sent successfully:', JSON.stringify(result));

    return new Response(JSON.stringify({ success: true }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      status: 200,
    });

  } catch (error) {
    console.error('Error sending email:', error);
    return new Response(
      JSON.stringify({ 
        error: 'Une erreur est survenue. Veuillez réessayer ultérieurement.',
      }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 500,
      }
    );
  }
});
