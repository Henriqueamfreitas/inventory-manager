import { ConflictError } from "../../../shared/errors/ConflictError";

export class EmailNotFoundError extends ConflictError {
  constructor() {
    super("Email not found");
  }
}
