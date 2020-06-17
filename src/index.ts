import express, { Request, Response } from "express";
import routes from "./routes";
import loadRequest from "./middlewares/LogRequest.middlewares";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());
app.use(loadRequest);
app.use(routes);

app.listen(3333, () => {
  console.log("🚀 Back-end started!");
});
