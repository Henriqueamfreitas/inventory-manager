import { SupplierEntity } from "../../infra/db/typeorm/entities/supplier.entity";

export interface ISupplierRepository {
  create(data: Partial<SupplierEntity>): Promise<SupplierEntity>;
  findAll(): Promise<SupplierEntity[]>;
  findById(id: string): Promise<SupplierEntity | null>;
  update(id: string, data: Partial<SupplierEntity>): Promise<SupplierEntity>;
}