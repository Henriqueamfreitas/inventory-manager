import { AppError } from "../../../shared/errors/AppError";

export class CategoryNotFoundError extends AppError {
  constructor() {
    super("Category not found", 404);
  }
}