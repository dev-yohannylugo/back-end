import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Product } from './models/product.model';
import { UpdateProductInput } from './dto/update-product.input';
import { CreateProductInput } from './dto/create-product.input';

@Injectable()
export class ProductService {
  constructor(
    @InjectModel(Product)
    private productModel: typeof Product,
  ) {}

  create(createProductInput: CreateProductInput): Promise<Product> {
    return this.productModel.create({ ...createProductInput });
  }

  findAll(): Promise<Product[]> {
    return this.productModel.findAll({ include: [{ association: 'rent' }] });
  }

  async findOne(id: number) {
    return this.productModel.findOne({
      where: { id },
      include: [{ association: 'rent' }],
    });
  }

  update(id: number, updateProductInput: UpdateProductInput) {
    return this.productModel.update(updateProductInput, { where: { id } });
  }

  async remove(id: number) {
    return this.productModel.destroy({ where: { id } });
  }
}
