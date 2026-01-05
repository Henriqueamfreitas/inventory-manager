import { ICategoryRepository } from "../../../domain/repositories/category.repository";

export class DeleteCategoryUseCase {
  constructor(private categoryRepo: ICategoryRepository) {}

  async execute(id: string): Promise<void> {
    await this.categoryRepo.delete(id);
  }
}