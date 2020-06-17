import express from "express";
import validateProjectId from "./validations/validateProjectId.validations";
import * as ProjectController from "./controllers/Projects.controller";

const routes = express.Router();
routes.get("/projects", ProjectController.index);
routes.post("/projects", ProjectController.store);
routes.delete("/projects/:id", validateProjectId, ProjectController.destroy);
routes.put("/projects:/id", validateProjectId, ProjectController.update);

export default routes;
