import { Product } from "../../../domain/entities/product";
import { PaginatedResponseDTO } from "../pagination/paginated-response.dto";

export interface IListProductsInputDTO {
  search?: string;
  categoryId?: string;
  isActive?: boolean;
}

export type IListProductsOutputDTO = PaginatedResponseDTO<Product>;
