import { PaginationMetaDTO } from "./pagination-meta.dto";

export interface PaginatedResponseDTO<T> {
  data: T[];
  meta: PaginationMetaDTO;
}
