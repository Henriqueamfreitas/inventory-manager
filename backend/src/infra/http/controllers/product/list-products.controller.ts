import { Request, Response } from "express";
import { ProductRepository } from "../../../db/typeorm/repositories/product.repository";
import { ListProductsUseCase } from "../../../../application/use-cases/product/list-products.usecase";
import { listProductsSchema } from "../../validators/product/list-products.schema";

export class ListProductsController {
  async handle(req: Request, res: Response) {
    const filters = listProductsSchema.parse(req.query);

    const useCase = new ListProductsUseCase(new ProductRepository());
    const products = await useCase.execute(filters);

    return res.status(200).json(products);
  }
}