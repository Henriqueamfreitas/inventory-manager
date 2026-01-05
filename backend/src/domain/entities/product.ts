export interface Product {
  id: string;
  name: string;
  description?: string;
  sku: string;
  price: number;
  quantity: number;
  categoryId: string;
  supplierId?: string;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}
