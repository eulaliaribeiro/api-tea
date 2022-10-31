import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BeneficiarioService } from './beneficiario.service';
import { CreateBeneficiarioDto } from './dto/create-beneficiario.dto';
import { UpdateBeneficiarioDto } from './dto/update-beneficiario.dto';

@Controller('beneficiario')
export class BeneficiarioController {
  constructor(private readonly beneficiarioService: BeneficiarioService) {}

  @Post()
  create(@Body() createBeneficiarioDto: CreateBeneficiarioDto) {
    return this.beneficiarioService.create(createBeneficiarioDto);
  }

  @Get()
  findAll() {
    return this.beneficiarioService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.beneficiarioService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBeneficiarioDto: UpdateBeneficiarioDto) {
    return this.beneficiarioService.update(+id, updateBeneficiarioDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.beneficiarioService.remove(+id);
  }
}
