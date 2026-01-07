import { Request, Response } from "express";
import { CreateSupplierUseCase } from "../../../../application/use-cases/supplier/create-supplier.usecase";
import { SupplierRepository } from "../../../db/typeorm/repositories/supplier.repository";
import { createSupplierSchema } from "../../validators/supplier/create-supplier.schema";

export class CreateSupplierController {
  async handle(req: Request, res: Response) {
    const data = createSupplierSchema.parse(req.body);

    const repo = new SupplierRepository();
    const useCase = new CreateSupplierUseCase(repo);

    const supplier = await useCase.execute(data);
    return res.status(201).json(supplier);
  }
}