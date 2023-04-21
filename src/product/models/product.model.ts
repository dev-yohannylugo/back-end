import { Column, HasOne, Model, Table } from 'sequelize-typescript';
import { Field, Float, Int, ObjectType } from '@nestjs/graphql';
import { Rent } from 'src/rent/models/rent.model';

@Table({ timestamps: false })
@ObjectType({ description: 'The Product Model' })
export class Product extends Model {
  @Column({
    primaryKey: true,
    unique: true,
    autoIncrement: true,
    allowNull: false,
  })
  @Field(() => Int, { description: 'primary key', nullable: true })
  readonly id: number;

  @Column({ unique: true })
  @Field(() => String)
  code: string;

  @Column({ unique: true })
  @Field(() => String)
  name: string;

  @Column
  @Field(() => String)
  description: string;

  @Column
  @Field(() => Float)
  price: number;

  @Column
  @Field(() => String)
  image: string;

  @Column
  @Field(() => String)
  seller: string;

  @Column
  @Field(() => String)
  type: string;

  @Column
  @Field(() => Int, { nullable: true })
  stock?: number;

  @HasOne(() => Rent)
  @Field(() => Rent, { nullable: true })
  rent?: Rent;
}
