import express from "express";

import * as ProjectController from "./controllers/Projects.controller";

const routes = express.Router();
routes.get("/projects", ProjectController.index);
routes.post("/projects", ProjectController.store);
routes.delete("/projects/:id", ProjectController.destroy);
routes.put("/projects:/id", ProjectController.update);

export default routes;
