export interface IUpdateProductInputDTO {
  id: string;
  name?: string;
  price?: number;
  quantity?: number;
  categoryId?: string;
  isActive?: boolean;
}