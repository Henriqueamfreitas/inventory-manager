import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
} from "typeorm";
import { CategoryEntity } from "./category.entity";
import { SupplierEntity } from "./supplier.entity";

@Entity("products")
export class ProductEntity {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column()
  name!: string;

  @Column({ nullable: true })
  description?: string;

  @Column({ unique: true })
  sku!: string;

  @Column("decimal", { precision: 10, scale: 2 })
  price!: number;

  @Column({ default: 0 })
  quantity!: number;

  @Column()
  categoryId!: string;

  @ManyToOne(() => CategoryEntity)
  @JoinColumn({ name: "categoryId" })
  category!: CategoryEntity;

  @Column({ nullable: true })
  supplierId?: string;

  @ManyToOne(() => SupplierEntity, { nullable: true })
  @JoinColumn({ name: "supplierId" })
  supplier?: SupplierEntity;

  @Column({ default: true })
  isActive!: boolean;

  @CreateDateColumn()
  createdAt!: Date;

  @UpdateDateColumn()
  updatedAt!: Date;
}
