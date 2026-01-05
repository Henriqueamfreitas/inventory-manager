import { ICategoryRepository } from "../../../domain/repositories/category.repository";
import { Category } from "../../../domain/entities/category";

export class CreateCategoryUseCase {
  constructor(private categoryRepository: ICategoryRepository) {}

  async execute(data: Partial<Category>): Promise<Category> {
    return this.categoryRepository.create(data);
  }
}