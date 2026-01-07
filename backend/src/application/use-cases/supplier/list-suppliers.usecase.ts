import { ISupplierRepository } from "../../../domain/repositories/supplier.repository";

export class ListSuppliersUseCase {
  constructor(private supplierRepo: ISupplierRepository) {}

  async execute() {
    return this.supplierRepo.findAll();
  }
}