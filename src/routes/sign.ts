import { Router, Request, Response } from "express";
import logs from "../logs";

const router = Router();

router.get("/time", (req: Request, res: Response) => {
    let time = new Date().getTime();

    logs.setItem(time.toString());

    res.json({
        time
    });
});

export default router;
