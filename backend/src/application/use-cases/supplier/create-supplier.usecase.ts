import { ISupplierRepository } from "../../../domain/repositories/supplier.repository";

export class CreateSupplierUseCase {
  constructor(private supplierRepo: ISupplierRepository) {}

  async execute(data: any) {
    return this.supplierRepo.create(data);
  }
}