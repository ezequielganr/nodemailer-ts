import express, { Application } from "express";
import cors from "cors";
import morgan from "morgan";
import helmet from "helmet";
import * as dotenv from "dotenv";

const app: Application = express();

dotenv.config();

app.use(cors());
app.use(morgan("combined"));
app.use(helmet());

app.use(express.json());

import routes from "./src/routes";

app.use("/api", routes);

app.listen(4000);
