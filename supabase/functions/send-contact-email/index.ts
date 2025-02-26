
import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { Resend } from "npm:resend@2.0.0"

const resend = new Resend(Deno.env.get('RESEND_API_KEY'));

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

interface ContactFormData {
  fullName: string;
  email: string;
  phone?: string;
  region?: string;
  requestType: string;
  specificAction?: string;
  message: string;
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders })
  }

  try {
    const formData: ContactFormData = await req.json()
    
    console.log('Starting email send with data:', formData);
    console.log('Using Resend API key:', !!Deno.env.get('RESEND_API_KEY')); // Will log true/false if key exists

    const { data, error } = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: ['projet.idee@ac-lille.fr', 'projet.idee@ac-amiens.fr'],
      subject: `Nouveau message de ${formData.fullName} - ${formData.requestType}`,
      html: `
        <h2>Nouveau message de contact</h2>
        <p><strong>Nom:</strong> ${formData.fullName}</p>
        <p><strong>Email:</strong> ${formData.email}</p>
        ${formData.phone ? `<p><strong>Téléphone:</strong> ${formData.phone}</p>` : ''}
        ${formData.region ? `<p><strong>Zone géographique:</strong> ${formData.region}</p>` : ''}
        <p><strong>Type de demande:</strong> ${formData.requestType}</p>
        ${formData.specificAction ? `<p><strong>Action spécifique:</strong> ${formData.specificAction}</p>` : ''}
        <h3>Message:</h3>
        <p>${formData.message.replace(/\n/g, '<br>')}</p>
      `
    });

    if (error) {
      console.error('Error sending email:', error);
      throw error;
    }

    console.log('Email sent successfully:', data);

    return new Response(JSON.stringify({ success: true }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      status: 200,
    })
  } catch (error) {
    console.error('Error in send-contact-email function:', error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 500,
      }
    )
  }
})
