import { Router } from "express";

const sign = Router();

import token from "./token";

sign.use(token);

export {
    sign
};
