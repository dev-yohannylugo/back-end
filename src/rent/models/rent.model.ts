import {
  BelongsTo,
  Column,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Product } from 'src/product/models/product.model';

@Table({ timestamps: false })
@ObjectType()
export class Rent extends Model {
  @Column({
    primaryKey: true,
    unique: true,
    autoIncrement: true,
    allowNull: false,
  })
  @Field(() => Int, { description: 'primary key' })
  id: number;

  @Column({ allowNull: true })
  @Field(() => String, { nullable: true })
  location?: string;

  @Column
  @Field(() => String)
  typeRent: string;

  @Column
  @Field(() => String)
  type: string;

  @ForeignKey(() => Product)
  @Column
  @Field(() => Int)
  productId: number;

  @BelongsTo(() => Product)
  product: Product;
}
