import express, { Request, Response } from "express";
import routes from "./routes";
import loadRequest from "./middlewares/LogRequest.middlewares";
import validateProjectId from "./validations/validateProjectId.validations";

const app = express();

app.use(express.json());
app.use(loadRequest);
app.use(validateProjectId);
app.use(routes);

app.listen(3333, () => {
  console.log("🚀 Back-end started!");
});
