import { AppDataSource } from "../database";

import { IStockMovementRepository } from "../../../../domain/repositories/stock-movement.repository";
import { StockMovementEntity } from "../entities/stock-movement.entity";
import { CreateStockMovementDTO, StockMovement } from "../../../../domain/entities/stock-movement";

export class StockMovementRepository implements IStockMovementRepository {
  private ormRepo = AppDataSource.getRepository(StockMovementEntity);

  async create(data: CreateStockMovementDTO): Promise<StockMovement> {
    const movement = this.ormRepo.create(data);
    return await this.ormRepo.save(movement);
  }

  async listByProduct(productId: string): Promise<StockMovement[]> {
    return await this.ormRepo.find({
      where: { productId },
      order: { createdAt: "DESC" },
    });
  }
}