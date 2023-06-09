import { Reservation } from './models/reservation.model';
import { ReservationService } from './reservation.service';
import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { CreateReservationInput } from './dto/create-reservation.input';
import { UpdateReservationInput } from './dto/update-reservation.input';

@Resolver(() => Reservation)
export class ReservationResolver {
  constructor(private readonly reservationService: ReservationService) {}

  @Mutation(() => Reservation)
  createReservation(
    @Args('createReservationInput')
    createReservationInput: CreateReservationInput,
  ) {
    return this.reservationService.create(createReservationInput);
  }

  @Query(() => [Reservation], { name: 'reservations' })
  findAll() {
    return this.reservationService.findAll();
  }

  @Query(() => Reservation, { name: 'reservation' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.reservationService.findOne(id);
  }

  @Mutation(() => Reservation)
  updateReservation(
    @Args('updateReservationInput')
    updateReservationInput: UpdateReservationInput,
  ) {
    return this.reservationService.update(
      updateReservationInput.id,
      updateReservationInput,
    );
  }

  @Mutation(() => Reservation)
  removeReservation(@Args('id', { type: () => Int }) id: number) {
    return this.reservationService.remove(id);
  }

  @Query(() => Boolean)
  isAvailable(
    @Args('rentId', { type: () => Int }) rentId: number,
    @Args('date', { type: () => String }) date: string,
  ) {
    return this.reservationService.isAvailable(rentId, date);
  }
}
