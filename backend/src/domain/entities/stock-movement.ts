export type StockMovementType = "IN" | "OUT";

export interface StockMovement {
  id: string;
  productId: string;
  type: StockMovementType;
  quantity: number;
  reason?: string;
  createdAt: Date;
}
