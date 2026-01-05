import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  ManyToOne,
  JoinColumn,
} from "typeorm";
import { ProductEntity } from "./product.entity";

@Entity("stock_movements")
export class StockMovementEntity {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column()
  productId!: string;

  @ManyToOne(() => ProductEntity)
  @JoinColumn({ name: "productId" })
  product!: ProductEntity;

  @Column({ type: "enum", enum: ["IN", "OUT"] })
  type!: "IN" | "OUT";

  @Column()
  quantity!: number;

  @Column({ nullable: true })
  reason?: string;

  @CreateDateColumn()
  createdAt!: Date;
}
