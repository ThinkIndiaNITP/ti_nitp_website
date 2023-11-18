import nodemailer from "nodemailer";

export default async (req, res) => {
  const { name, email, message } = req.body;
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.NEXT_PUBLIC_PERSONAL_EMAIL,
      pass: process.env.NEXT_PUBLIC_EMAIL_PASSWORD,
    },
  });

  try {
    await transporter.sendMail({
      from: email,
      to: "arunsinghbrh2004@gmail.com",
      subject: `${name}`,
      html: `<p>New Message comes from ThinkIndia website</p><br>
        <p><strong>Sender-Email: </strong> ${email}</p><br>
        <p><strong>Sender-Message: </strong> ${message}</p><br>
      `,
    });
  } catch (error) {
    return res.status(500).json({ error: error.message || error.toString() });
  }
  return res.status(200).json({ error: "" });
};
