import express from "express";
import { prisma } from "./prisma";
import nodemailer from "nodemailer";

const app = express();

app.use(express.json());

/* mailtrep */
const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "d36e2444319e2e",
    pass: "fb3bf3ad44bc87",
  },
});
/* ***************** */

app.post("/feedbacks", async (req, res) => {
  const { type, comment, screenshot } = req.body;
  const feedback = await prisma.feedback.create({
    data: {
      type,
      comment,
      screenshot,
    },
  });
  // console.log(req.body);

  await transport.sendMail({
    from: "Equipe Feedget <oi@feedget.com>", // de:
    to: "Édio Mazera <mazera3@gmail.com>", // para:
    subject: "Novo feedback", // assunto
    html: [
      `<div style="font-family:sans-serif; font-size:16px; color:#111;">`,
      `<p>Tipo do feedback: ${type}</p>`,
      `<p>Comentário: ${comment}</p>`,
      `</div>`,
    ].join("\n"),
  });

  res.status(201).json({ data: feedback });
});

app.listen(3333, () => {
  console.log("HTTP server running in port http://localhost:3333");
});
/* stagio 3/5 parou em 54:51 */