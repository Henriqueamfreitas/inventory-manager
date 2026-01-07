import { ISupplierRepository } from "../../../domain/repositories/supplier.repository";

export class FindSupplierByIdUseCase {
  constructor(private supplierRepo: ISupplierRepository) {}

  async execute(id: string) {
    const supplier = await this.supplierRepo.findById(id);
    if (!supplier) throw new Error("Supplier not found");
    return supplier;
  }
}