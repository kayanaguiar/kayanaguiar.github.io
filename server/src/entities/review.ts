import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from "typeorm";

@Entity()
export class Review {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  productId: number;  

  @Column()
  user: string;

  @Column()
  review: string;

  @Column({ type: "decimal", default: 0 })
  rating: number;

  @CreateDateColumn({ type: 'text' }) 
  date: Date;
}
