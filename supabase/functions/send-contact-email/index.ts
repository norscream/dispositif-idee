
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

    // Initialize Resend with the API key
    const resendApiKey = Deno.env.get('RESEND_API_KEY');
    if (!resendApiKey) {
      console.error('RESEND_API_KEY is not set');
      throw new Error('Configuration error: RESEND_API_KEY is missing');
    }
    console.log('RESEND_API_KEY is present:', resendApiKey.substring(0, 5) + '...');

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
    
    let notificationResult = null;
    
    try {
      // Dans l'environnement de test, nous envoyons le courriel de notification à l'expéditeur 
      // avec un sujet spécial pour indiquer que c'est une copie destinée à l'admin
      console.log('Sending notification email...');
      notificationResult = await resend.emails.send({
        from: 'IDÉE <onboarding@resend.dev>',
        to: [data.email], // En mode test, on envoie à l'expéditeur (c'est la seule adresse autorisée)
        reply_to: data.email,
        subject: `[COPIE ADMIN] Nouveau message de ${data.fullName} - ${data.requestType}`,
        html: `
          <p><strong>REMARQUE:</strong> En environnement de test, ce message est envoyé à l'expéditeur au lieu de projet.idee@ac-lille.fr</p>
          <p><strong>Pour que les messages soient envoyés à projet.idee@ac-lille.fr :</strong></p>
          <ol>
            <li>Vérifiez un domaine sur <a href="https://resend.com/domains">Resend.com/domains</a></li>
            <li>Changez l'adresse d'expéditeur pour utiliser ce domaine</li>
          </ol>
          <hr>
          ${emailHtml}
        `
      });

      console.log('Notification email result:', JSON.stringify(notificationResult));

      // Envoyer un email de confirmation à l'expéditeur
      console.log('Sending confirmation email to', data.email);
      const confirmationResult = await resend.emails.send({
        from: 'IDÉE <onboarding@resend.dev>',
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

      console.log('Confirmation email result:', JSON.stringify(confirmationResult));

      return new Response(JSON.stringify({ success: true, notificationResult, confirmationResult }), {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200,
      });

    } catch (error) {
      console.error('Resend API error:', error);
      return new Response(
        JSON.stringify({ error: 'Failed to send email', details: error.message }),
        {
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
          status: 500,
        }
      );
    }

  } catch (error) {
    console.error('Function error:', error);
    return new Response(
      JSON.stringify({ 
        error: 'Server error',
        details: error.message,
      }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 500,
      }
    );
  }
});
