
import nodemailer from "nodemailer";
import { isValidElement } from "react";

function isInvalidText(text) {
  return !text || text.trim() === "";
}

export const mailer = async (formData) => {
  try {
    const data = {
      senderEmail: formData.senderEmail,
      message: formData.message,
    };

    if (isValidElement(data.senderEmail) || isInvalidText(data.message))
      return {
        message: "Invalid Input",
      };

    const userEmail = "hopefulbose@getsafesurfer.com";
    const config = {
      host: process.env.MAIL_HOST,
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
    };

    const transporter = nodemailer.createTransport(config);

    const message = {
      from: process.env.MAIL_USER,
      to: userEmail,
      subject: `NAZAAKAT Contact Us from ${data.senderEmail}`,
      html: `<!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Mail</title>
      </head>
      <body>
          ${data.message}
      </body>
      </html>`,
    };

    const info = await transporter.sendMail(message);

    return { message: "Mail sent successfully" };
  } catch (error) {
    console.log(error);
    return { message: "There is some problem" };
  }
};
