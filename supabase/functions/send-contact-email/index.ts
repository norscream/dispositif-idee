
import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { Resend } from "npm:resend@2.0.0"

const resend = new Resend(Deno.env.get('RESEND_API_KEY'));

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const data = await req.json();
    
    console.log('Starting email send with data:', data);
    
    const { error: resendError } = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: ['projet.idee@ac-lille.fr', 'projet.idee@ac-amiens.fr'],
      subject: `Nouveau message de ${data.fullName} - ${data.requestType}`,
      html: `
        <h2>Nouveau message de contact</h2>
        <p><strong>Nom:</strong> ${data.fullName}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        ${data.phone ? `<p><strong>Téléphone:</strong> ${data.phone}</p>` : ''}
        ${data.region ? `<p><strong>Zone géographique:</strong> ${data.region}</p>` : ''}
        <p><strong>Type de demande:</strong> ${data.requestType}</p>
        ${data.specificAction ? `<p><strong>Action spécifique:</strong> ${data.specificAction}</p>` : ''}
        <h3>Message:</h3>
        <p>${data.message.replace(/\n/g, '<br>')}</p>
      `
    });

    if (resendError) {
      console.error('Resend error:', resendError);
      throw resendError;
    }

    return new Response(JSON.stringify({ success: true }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      status: 200,
    });
  } catch (error) {
    console.error('Function error:', error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 500,
      }
    );
  }
});
