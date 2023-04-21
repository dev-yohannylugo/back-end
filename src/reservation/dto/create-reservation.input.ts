import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateReservationInput {
  @Field(() => String)
  date: string;

  @Field(() => String)
  hour: string;

  @Field(() => Int)
  rentId: number;
}
