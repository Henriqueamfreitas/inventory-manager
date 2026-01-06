import { Request, Response } from "express";
import { ProductRepository } from "../../../db/typeorm/repositories/product.repository";
import { DeactivateProductUseCase } from "../../../../application/use-cases/product/deactivate-product.usecase";
import { deactivateProductSchema } from "../../validators/product/deactivate-product.schema";

export class DeactivateProductController {
  async handle(req: Request, res: Response) {
    const { id } = deactivateProductSchema.parse(req.params);
    
    const useCase = new DeactivateProductUseCase(new ProductRepository());
    await useCase.execute(id);

    return res.status(204).send();
  }
}