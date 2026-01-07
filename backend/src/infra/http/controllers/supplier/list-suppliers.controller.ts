import { Request, Response } from "express";
import { SupplierRepository } from "../../../db/typeorm/repositories/supplier.repository";
import { ListSuppliersUseCase } from "../../../../application/use-cases/supplier/list-suppliers.usecase";

export class ListSuppliersController {
  async handle(req: Request, res: Response) {
    const repo = new SupplierRepository();
    const useCase = new ListSuppliersUseCase(repo);

    const suppliers = await useCase.execute();
    return res.json(suppliers);
  }
}
