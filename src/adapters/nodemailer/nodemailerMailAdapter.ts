import { MailAdapter, SendMailData } from "../mailAdapter";
import nodemailer from "nodemailer";

/* mailtrep */
const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "d36e2444319e2e",
    pass: "fb3bf3ad44bc87",
  },
});

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({ subject, body }: SendMailData) {
    await transport.sendMail({
      from: "Equipe Feedget <oi@feedget.com>", // de:
      to: "Édio Mazera <mazera3@gmail.com>", // para:
      subject,
      html: body,
    });
  }
}
