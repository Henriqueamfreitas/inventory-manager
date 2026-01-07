import { Request, Response } from "express";
import { supplierParamsSchema } from "../../validators/supplier/supplier-id.schema";
import { SupplierRepository } from "../../../db/typeorm/repositories/supplier.repository";
import { DeactivateSupplierUseCase } from "../../../../application/use-cases/supplier/deactivate-supplier.usecase";

export class DeactivateSupplierController {
  async handle(req: Request, res: Response) {
    const { id } = supplierParamsSchema.parse(req.params);

    const repo = new SupplierRepository();
    const useCase = new DeactivateSupplierUseCase(repo);

    const supplier = await useCase.execute(id);
    return res.json(supplier);
  }
}