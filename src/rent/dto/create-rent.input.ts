import { InputType, Field, Int } from '@nestjs/graphql';

@InputType()
export class CreateRentInput {
  @Field(() => String, { nullable: true })
  location?: string;

  @Field(() => String)
  typeRent: string;

  @Field(() => String)
  type: string;

  @Field(() => Int)
  productId: number;
}
