import { RentService } from './rent.service';
import { Rent } from './models/rent.model';
import { CreateRentInput } from './dto/create-rent.input';
import { UpdateRentInput } from './dto/update-rent.input';
import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';

@Resolver(() => Rent)
export class RentResolver {
  constructor(private readonly rentService: RentService) {}

  @Mutation(() => Rent)
  createRent(@Args('createRentInput') createRentInput: CreateRentInput) {
    return this.rentService.create(createRentInput);
  }

  @Query(() => [Rent], { name: 'rents' })
  findAll() {
    return this.rentService.findAll();
  }

  @Query(() => Rent, { name: 'rent' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.rentService.findOne(id);
  }

  @Mutation(() => Rent)
  updateRent(@Args('updateRentInput') updateRentInput: UpdateRentInput) {
    return this.rentService.update(updateRentInput.id, updateRentInput);
  }

  @Mutation(() => Rent)
  removeRent(@Args('id', { type: () => Int }) id: number) {
    return this.rentService.remove(id);
  }
}
