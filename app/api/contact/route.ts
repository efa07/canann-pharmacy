import nodemailer from "nodemailer"

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json()

    if (!name || !email || !message) {
      return new Response(JSON.stringify({ error: "Missing fields" }), { status: 400 })
    }

    // Configure your SMTP transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.SMTP_USER, // your gmail
        pass: process.env.SMTP_PASS, // your app password
      },
    })

    const mailOptions = {
      from: email,
      to: "efatariku6@gmail.com",
      subject: `📬 New Contact Message from ${name}`,
      text: `
Name: ${name}
Email: ${email}
Message:
${message}
      `,
    }

    await transporter.sendMail(mailOptions)

    return new Response(JSON.stringify({ success: true }), { status: 200 })
  } catch (error) {
    console.error("Email sending error:", error)
    return new Response(JSON.stringify({ error: "Failed to send email" }), { status: 500 })
  }
}
