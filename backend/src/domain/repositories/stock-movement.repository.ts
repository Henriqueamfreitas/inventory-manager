import { CreateStockMovementDTO, StockMovement } from "../entities/stock-movement";

export interface IStockMovementRepository {
  create(data: CreateStockMovementDTO): Promise<StockMovement>;
  listByProduct(productId: string): Promise<StockMovement[]>;
}