import { Field, Int } from "type-graphql";
import { Entity,Column,  PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Todo{
    @PrimaryGeneratedColumn({type: 'int'})
    @Field(()=>Int)
    id:number

    @Column({type :"varchar"})
    @Field()
    subject : String

    @Column({type:'int'})
    @Field(()=>Int)
    marks: number


    @CreateDateColumn({ 
        type: 'timestamp', 
        precision: 6,
        nullable: true
      })
      @Field({ nullable: true })
      createdAt: Date;
    
      @UpdateDateColumn({
        type: 'timestamp', 
        precision: 6,
        nullable: true
      })
      @Field({ nullable: true })
      updatedAt: Date;
}
