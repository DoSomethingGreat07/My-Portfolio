import nodemailer from "nodemailer";

interface EmailPayload {
    name: string;
    email: string;
    subject: string;
    message: string;
}

export async function sendEmail({ name, email, subject, message }: EmailPayload) {
    // If no email config is present, we log to console (simulated in dev usually)
    // But standard way is to return if vars are missing
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
        console.warn("Missing EMAIL_USER or EMAIL_PASS environment variables.");
        // In a real app we might throw error, but for portfolio template we can simulate success or throw
        // For now, let's throw to indicate config needed
        throw new Error("Server misconfiguration: Missing email credentials");
    }

    const transporter = nodemailer.createTransport({
        service: "gmail", // Or use process.env.EMAIL_SERVICE
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        },
    });

    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: process.env.EMAIL_USER, // Vendor sends to themselves
        replyTo: email,
        subject: `Portfolio Contact: ${subject}`,
        text: `
      Name: ${name}
      Email: ${email}
      
      Message:
      ${message}
    `,
        html: `
      <h3>New Contact Form Submission</h3>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Subject:</strong> ${subject}</p>
      <br/>
      <p><strong>Message:</strong></p>
      <p>${message.replace(/\n/g, '<br>')}</p>
    `
    };

    return transporter.sendMail(mailOptions);
}
