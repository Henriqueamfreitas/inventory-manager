import { Repository } from "typeorm";
import { SupplierEntity } from "../entities/supplier.entity";
import { AppDataSource } from "../database";
import { ISupplierRepository } from "../../../../domain/repositories/supplier.repository";

export class SupplierRepository implements ISupplierRepository {
  private ormRepo: Repository<SupplierEntity>;

  constructor() {
    this.ormRepo = AppDataSource.getRepository(SupplierEntity);
  }

  async create(data: Partial<SupplierEntity>) {
    const supplier = this.ormRepo.create(data);
    return this.ormRepo.save(supplier);
  }

  async findAll() {
    return this.ormRepo.find();
  }

  async findById(id: string) {
    return this.ormRepo.findOne({ where: { id } });
  }

  async update(id: string, data: Partial<SupplierEntity>) {
    await this.ormRepo.update(id, data);
    return this.findById(id) as Promise<SupplierEntity>;
  }
}