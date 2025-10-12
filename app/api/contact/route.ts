import nodemailer from "nodemailer"

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json()

    if (!name || !email || !message) {
      return new Response(JSON.stringify({ error: "Missing fields" }), { status: 400 })
    }

    // Create transporter using your custom domain (EthioTelecom) SMTP
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "mail.ethiotelecom.et", 
      port: Number(process.env.SMTP_PORT) || 465, 
      secure: process.env.SMTP_SECURE === "true" || true, // true = use SSL
      auth: {
        user: process.env.SMTP_USER, // e.g. info@canaanpharmacy.com.et
        pass: process.env.SMTP_PASS, // your EthioTelecom email password
      },
      tls: {
        rejectUnauthorized: false, // helps avoid SSL issues on some hosts
      },
    })

    // Define the email details
    const mailOptions = {
      from: `"Canaan Pharmacy Contact" <${process.env.SMTP_USER}>`,
      replyTo: email, // so replies go to the sender
      to: "info@canaanpharmacy.com.et", // your receiving inbox
      subject: `📬 New Contact Message from ${name}`,
      text: `
New message from your website contact form:

Name: ${name}
Email: ${email}

Message:
${message}
      `,
    }

    // Send the email
    await transporter.sendMail(mailOptions)

    return new Response(JSON.stringify({ success: true }), { status: 200 })
  } catch (error) {
    console.error("Email sending error:", error)
    return new Response(
      JSON.stringify({
        error: "Failed to send email. Please try again later.",
        details: (error as Error).message,
      }),
      { status: 500 }
    )
  }
}
