import { join } from 'path';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ProductModule } from './product/product.module';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { RentModule } from './rent/rent.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { Product } from './product/models/product.model';
import { Rent } from './rent/models/rent.model';
import { ReservationModule } from './reservation/reservation.module';
import { Reservation } from './reservation/models/reservation.model';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
    }),
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '',
      database: 'test',
      models: [Product, Rent, Reservation],
      synchronize: true,
    }),
    ProductModule,
    RentModule,
    ReservationModule,
  ],
})
export class AppModule {}
