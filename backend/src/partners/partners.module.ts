import { Module } from '@nestjs/common';
import { PartnersController } from './partners.controller';
import { PartnersService } from './partners.service';

@Module({
  // If using TypeORM, you would import the Partner Entity here:
  // imports: [TypeOrmModule.forFeature([Partner])],
  controllers: [PartnersController],
  providers: [PartnersService],
})
export class PartnersModule {}
