import { Router, Request, Response } from "express";
import nodemailer from "nodemailer";

const router = Router();

import { sign } from "../libs";

const config: object = {
    host: "smtp.office365.com",
    port: 587,
    secure: false,
    auth: {
        user: process.env.NODEMAILER_USER,
        pass: process.env.NODEMAILER_PASS
    },
    tls: {
        rejectUnathorized: false
    }
}

const from: string = "Juan Chen<jchen@aliwan.com.ar>";

router.post("/nodemailer", sign, async (req: Request, res: Response) => {
    let to = <string>req.body.to;
    let subject = <string>req.body.subject;
    let html = <string>req.body.html;

    try {
        let transporter = nodemailer.createTransport(config);

        let info = await transporter.sendMail({ from, to, subject, html });

        res.json({
            message: info.messageId
        });

    } catch (e) {
        res.json({
            error: "Internal Server Error"
        });
    }
});

export default router;
