import { ISupplierRepository } from "../../../domain/repositories/supplier.repository";

export class DeactivateSupplierUseCase {
  constructor(private supplierRepo: ISupplierRepository) {}

  async execute(id: string) {
    return this.supplierRepo.update(id, { isActive: false });
  }
}