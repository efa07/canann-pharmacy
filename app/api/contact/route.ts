import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return new Response(JSON.stringify({ error: "Missing fields" }), { status: 400 });
    }

    // create SMTP transport using Zoho
    const transporter = nodemailer.createTransport({
      host: "smtp.zoho.com",
      port: 465,
      secure: true,
      auth: {
        user: "info@canaanpharmacy.com.et",
        pass: process.env.ZOHO_APP_PASSWORD, // your Zoho app password
      },
    });

    const mailOptions = {
      from: "info@canaanpharmacy.com.et",
      to: "info@canaanpharmacy.com.et",
      replyTo: email,
      subject: `📬 New Message from ${name}`,
      text: `
Name: ${name}
Email: ${email}
Message:
${message}
      `, // plain-text fallback
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.5; color: #333;">
          <h2 style="color: #2F4F4F;">📬 New Contact Message</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong></p>
          <p style="padding: 10px; background: #f9f9f9; border-radius: 5px;">${message}</p>
          <hr>
          <p style="font-size: 12px; color: #888;">This message was sent from your website contact form.</p>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error("Mail error:", error);
    return new Response(
      JSON.stringify({ error: "Failed to send email", details: (error as Error).message }),
      { status: 500 }
    );
  }
}
