
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

    // Construction du message HTML
    const emailHtml = `
      <h2>Nouveau message de contact</h2>
      <p><strong>Nom:</strong> ${data.fullName}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      ${data.phone ? `<p><strong>Téléphone:</strong> ${data.phone}</p>` : ''}
      ${data.region ? `<p><strong>Zone géographique:</strong> ${data.region}</p>` : ''}
      <p><strong>Type de demande:</strong> ${data.requestType}</p>
      ${data.specificAction ? `<p><strong>Action spécifique:</strong> ${data.specificAction}</p>` : ''}
      <h3>Message:</h3>
      <p>${data.message.replace(/\n/g, '<br>')}</p>
    `;
    
    try {
      console.log('Sending main email...');
      const result = await resend.emails.send({
        from: 'IDEE <onboarding@resend.dev>',
        to: ['projet.idee@ac-lille.fr'],
        reply_to: data.email,
        subject: `Nouveau message de ${data.fullName} - ${data.requestType}`,
        html: emailHtml
      });

      console.log('Main email result:', result);

      // Envoyer un email de confirmation à l'expéditeur
      console.log('Sending confirmation email...');
      const confirmationResult = await resend.emails.send({
        from: 'IDEE <onboarding@resend.dev>',
        to: [data.email],
        subject: 'Confirmation de votre message - IDÉE',
        html: `
          <h2>Merci pour votre message</h2>
          <p>Bonjour ${data.fullName},</p>
          <p>Nous avons bien reçu votre message concernant "${data.requestType}".</p>
          <p>Notre équipe vous répondra dans les plus brefs délais.</p>
          <br>
          <p>Cordialement,</p>
          <p>L'équipe IDÉE</p>
        `
      });

      console.log('Confirmation email result:', confirmationResult);

      return new Response(JSON.stringify({ success: true, result, confirmationResult }), {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200,
      });

    } catch (emailError) {
      console.error('Resend API error:', emailError);
      throw new Error(`Failed to send email: ${emailError.message}`);
    }

  } catch (error) {
    console.error('Function error:', error);
    return new Response(
      JSON.stringify({ 
        error: error.message,
        stack: error.stack
      }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 500,
      }
    );
  }
});
