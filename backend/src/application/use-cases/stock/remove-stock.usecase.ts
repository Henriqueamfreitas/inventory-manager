import { IProductRepository } from "../../../domain/repositories/product.repository";
import { IStockMovementRepository } from "../../../domain/repositories/stock-movement.repository";
import { AppError } from "../../../shared/errors/AppError";

interface IRequest {
  productId: string;
  quantity: number;
  reason?: string;
}

export class RemoveStockUseCase {
  constructor(
    private productRepository: IProductRepository,
    private stockRepository: IStockMovementRepository,
  ) {}

  async execute({ productId, quantity, reason }: IRequest) {
    const product = await this.productRepository.findById(productId);
    if (!product) throw new AppError("Product not found", 404);

    if (product.quantity < quantity) {
      throw new AppError("Insufficient stock", 400);
    }

    product.quantity -= quantity;

    await this.productRepository.update(product);

    await this.stockRepository.create({
      productId,
      type: "OUT",
      quantity,
      reason,
    });
  }
}