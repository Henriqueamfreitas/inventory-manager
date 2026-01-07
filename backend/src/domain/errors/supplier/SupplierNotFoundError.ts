import { AppError } from "../../../shared/errors/AppError";

export class SupplierNotFoundError extends AppError {
  constructor() {
    super("Supplier not found", 404);
  }
}