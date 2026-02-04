
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

    // Construction du message HTML
    const emailHtml = `
      <h2>Nouveau message de contact - IDÉE</h2>
      <p><strong>Nom:</strong> ${data.fullName}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      ${data.phone ? `<p><strong>Téléphone:</strong> ${data.phone}</p>` : ''}
      ${data.region ? `<p><strong>Zone géographique:</strong> ${data.region}</p>` : ''}
      <p><strong>Type de demande:</strong> ${data.requestType}</p>
      ${data.specificAction ? `<p><strong>Action spécifique:</strong> ${data.specificAction}</p>` : ''}
      <h3>Message:</h3>
      <p>${data.message.replace(/\n/g, '<br>')}</p>
    `;
    
    // Envoyer l'email à l'équipe IDÉE
    const result = await resend.emails.send({
      from: 'IDÉE Contact <onboarding@resend.dev>',
      to: ['projet.idee@ac-lille.fr'],
      reply_to: data.email,
      subject: `[Contact IDÉE] ${data.requestType} - ${data.fullName}`,
      html: emailHtml
    });

    console.log('Email sent successfully:', JSON.stringify(result));

    return new Response(JSON.stringify({ success: true, result }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      status: 200,
    });

  } catch (error) {
    console.error('Error sending email:', error);
    return new Response(
      JSON.stringify({ 
        error: 'Failed to send email',
        details: error.message,
      }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 500,
      }
    );
  }
});
