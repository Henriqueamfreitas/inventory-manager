import { IProductRepository } from "../../../domain/repositories/product.repository";
import { Product } from "../../../domain/entities/product";
import { randomUUID } from "crypto";

export class CreateProductUseCase {
  constructor(private productRepository: IProductRepository) {}

  async execute(data: Partial<Product>): Promise<Product> {
    const sku = `SKU-${randomUUID().slice(0, 8).toUpperCase()}`;
    const product = await this.productRepository.create({
      ...data,
      sku,
    });

    return product;
  }
}