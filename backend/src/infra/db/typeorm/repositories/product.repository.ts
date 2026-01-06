import { ILike } from "typeorm";
import {
  IProductRepository,
  IFindAllProductsParams,
  IFindAllProductsResponse,
} from "../../../../domain/repositories/product.repository";
import { Product } from "../../../../domain/entities/product";
import { ProductEntity } from "../entities/product.entity";
import { AppDataSource } from "../database";

export class ProductRepository implements IProductRepository {
  private ormRepo = AppDataSource.getRepository(ProductEntity);

  async create(data: Partial<Product>): Promise<Product> {
    const product = this.ormRepo.create(data);
    return await this.ormRepo.save(product);
  }

  async findById(id: string): Promise<Product | null> {
    return await this.ormRepo.findOne({ where: { id } });
  }

  async findAll(
    data: IFindAllProductsParams
  ): Promise<IFindAllProductsResponse> {
    const where: any = { isActive: true };

    if (data.name) where.name = ILike(`%${data.name}%`);
    if (data.categoryId) where.categoryId = data.categoryId;

    const page = data.page ?? 1;
    const perPage = data.perPage ?? 10;

    const [products, total] = await this.ormRepo.findAndCount({
      where,
      skip: (page - 1) * perPage,
      take: perPage,
      order: { createdAt: "DESC" },
    });

    return {
      products,
      meta: {
        page,
        perPage,
        total,
        totalPages: Math.ceil(total / perPage),
      },
    };
  }

  async update(data: Partial<Product>): Promise<Product | null> {
    const product = await this.ormRepo.findOne({ where: { id: data.id } });
    if (!product) return null;

    const merged = this.ormRepo.merge(product, data);
    return await this.ormRepo.save(merged);
  }

  async deactivate(id: string): Promise<void> {
    await this.ormRepo.update(id, { isActive: false });
  }
}