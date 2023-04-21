import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Reservation } from './models/reservation.model';
import { CreateReservationInput } from './dto/create-reservation.input';
import { UpdateReservationInput } from './dto/update-reservation.input';

@Injectable()
export class ReservationService {
  constructor(
    @InjectModel(Reservation)
    private reservationModel: typeof Reservation,
  ) {}

  create(createRentInput: CreateReservationInput): Promise<Reservation> {
    return this.reservationModel.create({ ...createRentInput });
  }

  findAll(): Promise<Reservation[]> {
    return this.reservationModel.findAll();
  }

  findOne(id: number) {
    return this.reservationModel.findByPk(id);
  }

  update(id: number, updateRentInput: UpdateReservationInput) {
    return this.reservationModel.update(updateRentInput, { where: { id } });
  }

  remove(id: number) {
    return this.reservationModel.destroy({ where: { id } });
  }

  async isAvailable(rentId: number, date: string) {
    const exist = await this.reservationModel.findOne({
      where: {
        date,
        rentId,
      },
    });
    return !exist;
  }
}
