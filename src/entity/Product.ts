import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, BaseEntity } from "typeorm"

@Entity()
export class Product extends BaseEntity {
    @PrimaryGeneratedColumn()
    productid: number
    
    @Column()
    categoryid: number
    
    @Column()
    description: string
    
    @Column()
    price: number
    
    @Column()
    image: string
    
    @Column()
    active: boolean
    
    @CreateDateColumn()
    created_at: Date
    
    @UpdateDateColumn()
    updated_at: Date
}