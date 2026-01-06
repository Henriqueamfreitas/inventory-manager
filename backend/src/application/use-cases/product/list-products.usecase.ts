import { Product } from "../../../domain/entities/product";
import { IProductRepository } from "../../../domain/repositories/product.repository";
import { IListProductsInputDTO, IListProductsOutputDTO } from "../../dtos/product/list-products.dto";

export class ListProductsUseCase {
  constructor(private productRepository: IProductRepository) { }

  async execute(filters: IListProductsInputDTO): Promise<IListProductsOutputDTO> {
    const { products, meta } = await this.productRepository.findAll(filters);
    return {
      data: products,
      meta: {
        page: Number(meta.page ?? 1),
        perPage: Number(meta.perPage ?? 10),
        total: meta.total,
        totalPages: Math.ceil(meta.total / (meta.perPage ?? 10)),
      }
    }
  }
}