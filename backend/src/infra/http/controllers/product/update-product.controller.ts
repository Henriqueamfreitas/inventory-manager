import { Request, Response } from "express";
import { ProductRepository } from "../../../db/typeorm/repositories/product.repository";
import { UpdateProductUseCase } from "../../../../application/use-cases/product/update-product.usecase";
import { updateProductSchema } from "../../validators/product/update-product.schema";

export class UpdateProductController {
  async handle(req: Request, res: Response) {
    const data = updateProductSchema.parse({
      id: req.params.id,
      ...req.body,
    });

    const useCase = new UpdateProductUseCase(new ProductRepository());
    const product = await useCase.execute(data);

    return res.status(200).json(product);
  }
}