import { Module } from '@nestjs/common';
import { PartnersModule } from './partners/partners.module';

@Module({
  imports: [
    // In a real application, you would configure your database connection here.
    // Example for PostgreSQL with TypeORM:
    // TypeOrmModule.forRoot({
    //   type: 'postgres',
    //   host: 'localhost',
    //   port: 5432,
    //   username: 'your_user',
    //   password: 'your_password',
    //   database: 'freshyx_db',
    //   entities: [__dirname + '/**/*.entity{.ts,.js}'],
    //   synchronize: true, // Be cautious with this in production
    // }),
    PartnersModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
