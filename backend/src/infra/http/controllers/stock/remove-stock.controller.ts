import { Request, Response } from "express";
import { removeStockSchema } from "../../validators/stock/remove-stock.schema";
import { ProductRepository } from "../../../db/typeorm/repositories/product.repository";
import { StockMovementRepository } from "../../../db/typeorm/repositories/stock-movement.repository";
import { RemoveStockUseCase } from "../../../../application/use-cases/stock/remove-stock.usecase";

export class RemoveStockController {
  async handle(req: Request, res: Response) {
    const data = removeStockSchema.parse(req.body);

    const useCase = new RemoveStockUseCase(
      new ProductRepository(),
      new StockMovementRepository()
    );

    await useCase.execute(data);

    return res.status(204).send();
  }
}