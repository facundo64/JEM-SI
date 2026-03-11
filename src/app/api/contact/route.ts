import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, message } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Nombre, email y mensaje son obligatorios." },
        { status: 400 }
      );
    }

    // Send email via Resend
    const { data, error } = await resend.emails.send({
      from: "JEM-SI Web <onboarding@resend.dev>",
      to: ["ventas@jem-si.com.ar"],
      replyTo: email,
      subject: `Nuevo contacto web: ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="border-bottom: 2px solid #2C2C2C; padding-bottom: 16px; margin-bottom: 24px;">
            <h1 style="color: #2C2C2C; font-size: 20px; margin: 0;">JEM-SI — Nuevo Contacto Web</h1>
          </div>
          
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #eee; color: #888; font-size: 12px; text-transform: uppercase; letter-spacing: 1px; width: 120px;">Nombre</td>
              <td style="padding: 12px 0; border-bottom: 1px solid #eee; color: #2C2C2C; font-size: 14px;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #eee; color: #888; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Email</td>
              <td style="padding: 12px 0; border-bottom: 1px solid #eee; color: #2C2C2C; font-size: 14px;"><a href="mailto:${email}" style="color: #2C2C2C;">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #eee; color: #888; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Teléfono</td>
              <td style="padding: 12px 0; border-bottom: 1px solid #eee; color: #2C2C2C; font-size: 14px;">${phone || "No proporcionado"}</td>
            </tr>
          </table>
          
          <div style="margin-top: 24px; padding: 20px; background-color: #f9f9f9; border-left: 3px solid #2C2C2C;">
            <p style="color: #888; font-size: 12px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px 0;">Mensaje</p>
            <p style="color: #2C2C2C; font-size: 14px; line-height: 1.8; margin: 0; white-space: pre-wrap;">${message}</p>
          </div>
          
          <p style="color: #aaa; font-size: 11px; margin-top: 32px; text-align: center;">
            Enviado desde el formulario de contacto de jem-si.vercel.app
          </p>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "Error al enviar el email." },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true, id: data?.id });
  } catch (err) {
    console.error("Contact API error:", err);
    return NextResponse.json(
      { error: "Error interno del servidor." },
      { status: 500 }
    );
  }
}
