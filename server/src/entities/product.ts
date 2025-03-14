import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import { Category } from "./types/category-type";
import { Dress } from "./types/dress-type";
import { Size } from "./types/size-type";

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column("decimal")
  price: number;

  @Column("simple-array")
  image: string[];

  @Column({ type: "decimal", nullable: true })
  discount?: number; 

  @Column({ type: "decimal", default: 0 })
  rating: number;

  @Column("text")
  description: string;

  @Column("simple-array")
  color: string[]; 

  @Column("simple-array")
  size: Size[]; 

  @Column()
  category: Category;

  @Column()
  dress: Dress;
}
