import { CreateRentInput } from './create-rent.input';
import { InputType, Field, PartialType, Int } from '@nestjs/graphql';

@InputType()
export class UpdateRentInput extends PartialType(CreateRentInput) {
  @Field(() => Int)
  id: number;
}
