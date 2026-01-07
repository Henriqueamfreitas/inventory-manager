import { Request, Response } from "express";
import { supplierParamsSchema } from "../../validators/supplier/supplier-id.schema";
import { updateSupplierSchema } from "../../validators/supplier/update-supplier.schema";
import { SupplierRepository } from "../../../db/typeorm/repositories/supplier.repository";
import { UpdateSupplierUseCase } from "../../../../application/use-cases/supplier/update-supplier.usecase";

export class UpdateSupplierController {
  async handle(req: Request, res: Response) {
    const { id } = supplierParamsSchema.parse(req.params);
    const data = updateSupplierSchema.parse(req.body);

    const repo = new SupplierRepository();
    const useCase = new UpdateSupplierUseCase(repo);

    const supplier = await useCase.execute(id, data);
    return res.json(supplier);
  }
}