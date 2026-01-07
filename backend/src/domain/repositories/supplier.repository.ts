import { Supplier } from "../entities/supplier";

export interface ISupplierRepository {
  create(data: Partial<Supplier>): Promise<Supplier>;
  findAll(): Promise<Supplier[]>;
  findById(id: string): Promise<Supplier | null>;
  update(id: string, data: Partial<Supplier>): Promise<Supplier>;
}