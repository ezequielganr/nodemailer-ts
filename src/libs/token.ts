import { Router, Request, Response, NextFunction } from "express";

const router = Router();

import logs from "../logs";

router.use((req: Request, res: Response, next: NextFunction) => {
    let token = <string>req.headers.authorization;

    if (!token) {
        return res.json({
            error: "Undefined token"
        });
    }
    
    if (token.startsWith("Bearer ")) {
        token = token.slice(7, token.length);
    }

    let bool = logs.getItem(token);

    if (!bool) {
        return res.json({
            error: "Expired token"
        });
    }

    next();
});

export default router;
