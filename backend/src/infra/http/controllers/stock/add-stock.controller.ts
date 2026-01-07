import { AddStockUseCase } from "../../../../application/use-cases/stock/add-stock.usecase";
import { ProductRepository } from "../../../db/typeorm/repositories/product.repository";
import { StockMovementRepository } from "../../../db/typeorm/repositories/stock-movement.repository";
import { Request, Response } from "express";
import { addStockSchema } from "../../validators/stock/add-stock.schema";

export class AddStockController {
  async handle(req: Request, res: Response) {
    const data = addStockSchema.parse(req.body);

    const useCase = new AddStockUseCase(
      new ProductRepository(),
      new StockMovementRepository()
    );

    await useCase.execute(data);
    return res.status(204).send();
  }
}