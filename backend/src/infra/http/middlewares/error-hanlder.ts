import { NextFunction, Request, Response } from "express";
import { AppError } from "../../../shared/errors/AppError";
import { ZodError } from "zod";

export function errorHandler(
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) {

  if (err instanceof ZodError) {
    const formatted = err.issues.map((e) => ({
      field: e.path.join("."),
      message: e.message, // this now uses your custom messages
    }));

    return res.status(400).json({
      success: false,
      message: "Validation error",
      errors: formatted,
    });
  }

  if (err instanceof AppError) {
    return res.status(err.statusCode).json({
      success: false,
      message: err.message,
    });
  }

  console.error(err); // Useful for debugging

  return res.status(500).json({
    success: false,
    message: "Internal server error",
  });
}

