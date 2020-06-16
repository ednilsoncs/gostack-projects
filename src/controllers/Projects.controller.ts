import { Response, Request } from "express";
import { uuid } from "uuidv4";

interface Project {
  title: string;
  owner: string;
  id: string;
}
const projects: Project[] = [];

export const index = (request: Request, response: Response) => {
  const { title } = request.query;
  const results = title
    ? projects.filter((project) => project.title.includes(String(title)))
    : projects;
  return response.json(results);
};

export const store = (request: Request, response: Response) => {
  const { title, owner } = request.body;
  const project = { id: uuid(), title, owner };
  projects.push(project);
  return response.json(project);
};

export const update = (request: Request, response: Response) => {
  const { id } = request.params;
  const { title, owner } = request.body;
  const projectIndex = projects.findIndex((project) => project.id === id);
  if (projectIndex < 0) {
    return response.status(400).json({ error: "Project not found" });
  }
  const project = { ...projects[projectIndex], title, owner };
  projects[projectIndex] = project;
  return response.json(project);
};

export const destroy = (request: Request, response: Response) => {
  const { id } = request.params;
  const projectIndex = projects.findIndex((project) => project.id === id);
  if (projectIndex < 0) {
    return response.status(400).json({ error: "Project not found" });
  }

  projects.splice(projectIndex, 1);
  return response.status(204).send();
};
