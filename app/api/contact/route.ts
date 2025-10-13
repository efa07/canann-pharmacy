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
        pass: process.env.ZOHO_APP_PASSWORD, // not your Zoho login password!
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
