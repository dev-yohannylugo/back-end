import { InputType, Field, Float, Int } from '@nestjs/graphql';

@InputType()
export class CreateProductInput {
  @Field(() => String)
  code: string;

  @Field(() => String)
  name: string;

  @Field(() => String)
  description: string;

  @Field(() => Float)
  price: number;

  @Field(() => String)
  image: string;

  @Field(() => String)
  seller: string;

  @Field(() => String)
  type: string;

  @Field(() => Int, { nullable: true })
  stock?: number;
}
