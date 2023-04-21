import { Module } from '@nestjs/common';
import { Rent } from './models/rent.model';
import { RentService } from './rent.service';
import { RentResolver } from './rent.resolver';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({
  imports: [SequelizeModule.forFeature([Rent])],
  providers: [RentResolver, RentService],
})
export class RentModule {}
