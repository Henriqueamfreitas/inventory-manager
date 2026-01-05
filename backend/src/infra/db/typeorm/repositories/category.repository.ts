import { AppDataSource } from "../database";
import { CategoryEntity } from "../entities/category.entity";
import { ICategoryRepository } from "../../../../domain/repositories/category.repository";
import { Category } from "../../../../domain/entities/category";

export class CategoryRepository implements ICategoryRepository {
  private ormRepo = AppDataSource.getRepository(CategoryEntity);

  async create(data: Partial<Category>): Promise<Category> {
    const category = this.ormRepo.create(data);
    return this.ormRepo.save(category);
  }

  async findAll(): Promise<Category[]> {
    return this.ormRepo.find({ where: { isActive: true } });
  }

  async findById(id: string): Promise<Category | null> {
    return this.ormRepo.findOne({ where: { id } });
  }

  async update(data: Partial<Category>): Promise<Category | null> {
    const category = await this.findById(data.id!);
    if (!category) return null;

    return this.ormRepo.save({ ...category, ...data });
  }

  async delete(id: string): Promise<void> {
    await this.ormRepo.update(id, { isActive: false });
  }
}