import { ICategoryRepository } from "../../../domain/repositories/category.repository";

export class ListCategoriesUseCase {
  constructor(private categoryRepo: ICategoryRepository) {}

  async execute() {
    return await this.categoryRepo.findAll();
  }
}