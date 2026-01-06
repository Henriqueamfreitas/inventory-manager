import { Request, Response } from "express";
import { CreateProductUseCase } from "../../../../application/use-cases/product/create-product.usecase";
import { ProductRepository } from "../../../db/typeorm/repositories/product.repository";
import { createProductSchema } from "../../validators/product/create-product.schema";

export class CreateProductController {
  async handle(req: Request, res: Response) {
    const data = createProductSchema.parse(req.body);

    console.log(1111 * 1)
    const useCase = new CreateProductUseCase(
      new ProductRepository()
    );
    console.log(1111 * 8)

    const product = await useCase.execute(data);

    return res.status(201).json(product);
  }
}   