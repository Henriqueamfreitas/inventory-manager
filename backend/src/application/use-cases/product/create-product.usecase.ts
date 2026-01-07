import { IProductRepository } from "../../../domain/repositories/product.repository";
import { Product } from "../../../domain/entities/product";
import { randomUUID } from "crypto";
import { ICategoryRepository } from "../../../domain/repositories/category.repository";
import { ISupplierRepository } from "../../../domain/repositories/supplier.repository";
import { SupplierNotFoundError } from "../../../domain/errors/supplier/SupplierNotFoundError";
import { CategoryNotFoundError } from "../../../domain/errors/category/CategoryNotFoundError";

export class CreateProductUseCase {
  constructor(
    private productRepository: IProductRepository,
    private categoryRepository: ICategoryRepository,
    private supplierRepository: ISupplierRepository,
  ) { }

  async execute(data: Partial<Product>): Promise<Product> {
    const sku = `SKU-${randomUUID().slice(0, 8).toUpperCase()}`;
    const category = await this.categoryRepository.findById(data.categoryId ?? "");
    if (!category) {
      throw new CategoryNotFoundError();
    }

    const supplier = await this.supplierRepository.findById(data.supplierId ?? "");
    if (!supplier) {
      throw new SupplierNotFoundError();
    }
    const product = await this.productRepository.create({
      ...data,
      sku,
    });

    return product;
  }
}