import { ICategoryRepository } from "../../../domain/repositories/category.repository";
import { AppError } from "../../../shared/errors/AppError";

export class UpdateCategoryUseCase {
  constructor(private categoryRepo: ICategoryRepository) {}

  async execute(data: { id: string; name?: string; description?: string }) {
    const category = await this.categoryRepo.update(data);
    if (!category) throw new AppError("Category not found", 404);
    return category;
  }
}