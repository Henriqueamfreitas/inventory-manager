import { Request, Response } from "express";
import { CreateProductUseCase } from "../../../../application/use-cases/product/create-product.usecase";
import { ProductRepository } from "../../../db/typeorm/repositories/product.repository";
import { createProductSchema } from "../../validators/product/create-product.schema";
import { CategoryRepository } from "../../../db/typeorm/repositories/category.repository";
import { SupplierRepository } from "../../../db/typeorm/repositories/supplier.repository";

export class CreateProductController {
  async handle(req: Request, res: Response) {
    const data = createProductSchema.parse(req.body);

    const useCase = new CreateProductUseCase(
      new ProductRepository(),
      new CategoryRepository(),
      new SupplierRepository(),
    );

    const product = await useCase.execute(data);

    return res.status(201).json(product);
  }
}   