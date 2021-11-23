import express from "express";
import nodemailer from "nodemailer";
import fs from "fs";

const router = express.Router();
const email = "rb.nodefolio@outlook.com";
const pass = JSON.parse(fs.readFileSync("mail.json"));

router.post("/contact/", async (req, res) => {
    let transporter = nodemailer.createTransport({
        service: 'hotmail',
        auth: {
           user: email,
           pass: pass.word
        }
    });

     const options = {
         from: email,
         to: "Lemonheadzgg@gmail.com",
         subject: `Nodefolio Message From: "Name: ${req.body.name}, E-mail: ${req.body.email}, Phone: ${req.body.phone}`,
         text: req.body.message
     };

     let info = await transporter.sendMail(options, function (err, info) {
         if (err) {
             res.sendStatus(500)
         } else {
             res.sendStatus(200)
         }
     });
 });

export default router;