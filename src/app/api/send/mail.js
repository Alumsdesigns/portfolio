// // pages/api/send-email.js
// import sgMail from '@sendgrid/mail';

// export default async (req, res) => {
//   if (req.method === 'POST') {
//     sgMail.setApiKey(process.env.SENDGRID_API_KEY);

//     const { name, email, message } = req.body;

//     const msg = {
//       to: 'alum.damaris@gmail.com',
//       from: email,
//       subject: 'New Contact Form Submission',
//       text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
//     };

//     try {
//       await sgMail.send(msg);
//       res.status(200).json({ success: true });
//     } catch (error) {
//       console.error('Error sending email:', error);
//       res.status(500).json({ success: false, error: 'Error Email not sent' });
//     }
//   } else {
//     res.status(405).json({ error: 'error Method not allowed' });
//   }
// };

const mail = require('@sendgrid/mail');

mail.setApiKey(process.env.SENDGRID_API_KEY);

export default async (req, res) => {
  const body = JSON.parse(req.body);

  const message = `
    Email: ${body.email}\r\n
    Subject: ${body.subject}\r\n
    Message: ${body.message}
  `;

  await mail.send({
    to: 'to.name@email.com',
    from: 'from.name@email.com',
    subject: 'New Message!',
    text: message,
    html: message.replace(/\r\n/g, '<br>'),
  });

  res.status(200).json({ status: 'Ok' });
};
