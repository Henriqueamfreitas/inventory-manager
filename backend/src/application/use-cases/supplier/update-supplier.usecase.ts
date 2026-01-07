import { ISupplierRepository } from "../../../domain/repositories/supplier.repository";

export class UpdateSupplierUseCase {
  constructor(private supplierRepo: ISupplierRepository) {}

  async execute(id: string, data: any) {
    return this.supplierRepo.update(id, data);
  }
}