import { StockMovementRepository } from "../../../db/typeorm/repositories/stock-movement.repository";
import { Request, Response } from "express";

export class ListStockByProductController {
  async handle(req: Request, res: Response) {
    const { productId } = req.params;

    const repo = new StockMovementRepository();
    const movements = await repo.listByProduct(productId);

    return res.json(movements);
  }
}