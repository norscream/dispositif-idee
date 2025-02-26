
import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { Resend } from "npm:resend@2.0.0"

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
    console.log('Received data:', data);

    // Vérifier si la clé API Resend est présente
    const resendApiKey = Deno.env.get('RESEND_API_KEY');
    if (!resendApiKey) {
      console.error('RESEND_API_KEY is not set');
      throw new Error('Configuration error: RESEND_API_KEY is missing');
    }
    console.log('RESEND_API_KEY is present');

    // Initialiser Resend avec la clé API
    const resend = new Resend(resendApiKey);
    
    console.log('Attempting to send email...');
    
    try {
      const result = await resend.emails.send({
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

      console.log('Email send result:', result);

      return new Response(JSON.stringify({ success: true, result }), {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200,
      });

    } catch (emailError: any) {
      console.error('Resend API error:', emailError);
      throw new Error(`Failed to send email: ${emailError.message}`);
    }

  } catch (error: any) {
    console.error('Function error:', error);
    return new Response(
      JSON.stringify({ 
        error: error.message,
        stack: error.stack // Ajouter la stack trace pour le débogage
      }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 500,
      }
    );
  }
});
