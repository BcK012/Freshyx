import { Controller, Get, Param } from '@nestjs/common';
import { PartnersService } from './partners.service';
import { PartnerDto } from './partner.dto';

@Controller('api/partners')
export class PartnersController {
  constructor(private readonly partnersService: PartnersService) {}

  @Get()
  async findAll(): Promise<PartnerDto[]> {
    return this.partnersService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<PartnerDto> {
    return this.partnersService.findOne(id);
  }
}
