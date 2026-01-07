import { Request, Response } from "express";
import { supplierParamsSchema } from "../../validators/supplier/supplier-id.schema";
import { SupplierRepository } from "../../../db/typeorm/repositories/supplier.repository";
import { FindSupplierByIdUseCase } from "../../../../application/use-cases/supplier/find-supplier-by-id.usecase";

export class FindSupplierByIdController {
  async handle(req: Request, res: Response) {
    const { id } = supplierParamsSchema.parse(req.params);

    const repo = new SupplierRepository();
    const useCase = new FindSupplierByIdUseCase(repo);

    const supplier = await useCase.execute(id);
    return res.json(supplier);
  }
}