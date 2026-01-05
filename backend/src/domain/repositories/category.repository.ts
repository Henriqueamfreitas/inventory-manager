import { Category } from "../entities/category";

export interface ICategoryRepository {
  create(data: Partial<Category>): Promise<Category>;
  findAll(): Promise<Category[]>;
  findById(id: string): Promise<Category | null>;
  update(data: Partial<Category>): Promise<Category | null>;
  delete(id: string): Promise<void>;
}
