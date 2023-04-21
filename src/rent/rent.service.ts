import { Rent } from './models/rent.model';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateRentInput } from './dto/create-rent.input';
import { UpdateRentInput } from './dto/update-rent.input';

@Injectable()
export class RentService {
  constructor(
    @InjectModel(Rent)
    private rentModel: typeof Rent,
  ) {}

  create(createRentInput: CreateRentInput): Promise<Rent> {
    return this.rentModel.create({ ...createRentInput });
  }

  findAll(): Promise<Rent[]> {
    return this.rentModel.findAll();
  }

  findOne(id: number) {
    return this.rentModel.findByPk(id);
  }

  update(id: number, updateRentInput: UpdateRentInput) {
    return this.rentModel.update(updateRentInput, { where: { id } });
  }

  remove(id: number) {
    return this.rentModel.destroy({ where: { id } });
  }
}
