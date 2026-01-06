import { IProductRepository } from "../../../domain/repositories/product.repository";
import { IUpdateProductInputDTO } from "../../dtos/product/update-product.dto";
import { AppError } from "../../../shared/errors/AppError";

export class UpdateProductUseCase {
  constructor(private productRepository: IProductRepository) {}

  async execute(data: IUpdateProductInputDTO) {
    const updated = await this.productRepository.update(data);
    if (!updated) {
      throw new AppError("Product not found", 404);
    }
    return updated;
  }
}