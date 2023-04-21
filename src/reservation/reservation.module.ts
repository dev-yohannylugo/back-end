import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { ReservationService } from './reservation.service';
import { ReservationResolver } from './reservation.resolver';
import { Reservation } from './models/reservation.model';

@Module({
  imports: [SequelizeModule.forFeature([Reservation])],
  providers: [ReservationResolver, ReservationService],
})
export class ReservationModule {}
