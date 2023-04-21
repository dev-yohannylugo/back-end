import {
  BelongsTo,
  Column,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Rent } from 'src/rent/models/rent.model';

@Table({ timestamps: false })
@ObjectType()
export class Reservation extends Model {
  @Column({
    primaryKey: true,
    unique: true,
    autoIncrement: true,
    allowNull: false,
  })
  @Field(() => Int, { description: 'primary key' })
  id: number;

  @Column
  @Field(() => String)
  date: string;

  @Column
  @Field(() => String)
  hour: string;

  @ForeignKey(() => Rent)
  @Column
  @Field(() => Int)
  rentId: number;

  @BelongsTo(() => Rent)
  rent: Rent;
}
