import { Request, Response, NextFunction } from "express";
import { isUuid } from "uuidv4";

export default async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  const { id } = request.params;
  if (!isUuid(id)) {
    return response.status(400).json({ error: "Invalid project ID." });
  }
  return next();
};
