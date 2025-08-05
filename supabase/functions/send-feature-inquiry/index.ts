import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface FeatureInquiryRequest {
  email: string;
  feature: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { email, feature }: FeatureInquiryRequest = await req.json();

    if (!email || !feature) {
      return new Response(
        JSON.stringify({ error: "Email and feature are required" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    // Send notification email to SquadAssist
    const emailResponse = await resend.emails.send({
      from: "SquadAssist <hello@frontend.squadassist.ai>",
      to: ["hello@squadassist.ai"],
      subject: `Feature Interest: ${feature}`,
      html: `
        <h2>New Feature Interest</h2>
        <p>Someone has expressed interest in one of your features.</p>
        <p><strong>Feature:</strong> ${feature}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p>Please reach out to them to discuss their specific needs.</p>
      `,
    });

    console.log("Feature inquiry email sent successfully:", emailResponse);

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error in send-feature-inquiry function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);