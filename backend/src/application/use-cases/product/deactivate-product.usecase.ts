import { IProductRepository } from "../../../domain/repositories/product.repository";
import { AppError } from "../../../shared/errors/AppError";

export class DeactivateProductUseCase {
  constructor(private productRepository: IProductRepository) {}

  async execute(id: string): Promise<void> {
    const product = await this.productRepository.findById(id);
    if (!product) {
      throw new AppError("Product not found", 404);
    }

    await this.productRepository.deactivate(id);
  }
}
