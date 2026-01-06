import { Product } from "../entities/product";

export interface IFindAllProductsParams {
  name?: string;
  categoryId?: string;
  page?: number;
  perPage?: number;
}

export interface IFindAllProductsResponse {
  products: Product[];
  meta: {
    page: number;
    perPage: number;
    total: number;
    totalPages: number;
  };
}

export interface IProductRepository {
  create(data: Partial<Product>): Promise<Product>;
  findById(id: string): Promise<Product | null>;
  findAll(data: IFindAllProductsParams): Promise<IFindAllProductsResponse>;
  update(data: Partial<Product>): Promise<Product | null>;
  deactivate(id: string): Promise<void>;
}