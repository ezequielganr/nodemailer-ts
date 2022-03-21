import { Router } from "express";

const router = Router();

import sign from "./sign";
import nodemailer from "./nodemailer";

router.use(sign);
router.use(nodemailer);

export default router;
