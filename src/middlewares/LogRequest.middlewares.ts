import { Request, Response, NextFunction } from "express";

export default async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  const { method, url } = request;
  const logLabel = `[${method.toUpperCase()}] ${url}`;

  console.log(logLabel);
  return next();
};
