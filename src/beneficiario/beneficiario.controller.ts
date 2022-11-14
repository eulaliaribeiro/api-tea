import { Body, Controller, Delete, Get, HttpCode, HttpException, HttpStatus, Param, Patch, Post } from '@nestjs/common';
import { BeneficiarioService } from './beneficiario.service';
import { CreateBeneficiarioDto } from './dto/create-beneficiario.dto';

@Controller('beneficiario')
export class BeneficiarioController {
  constructor(private readonly beneficiarioService: BeneficiarioService) { }

  @Get()
  async findAll() {
    return this.beneficiarioService.findAll();
  }

  @Get(':id')
  async findOneByOrFail(@Param('id') id: number) {
    let beneficiario;
    try {
      beneficiario = await this.beneficiarioService.findOne(+id);
    } catch {
      throw new HttpException(
        `Beneficiário com id ${id} não encontrado`,
        HttpStatus.NOT_FOUND,
      );
    }
    return beneficiario;
  }
  
  @Post()
  async create(@Body() createBeneficiarioDto: CreateBeneficiarioDto) {
    return await this.beneficiarioService.create(createBeneficiarioDto);
  }

  @Patch(':id')
  async update(@Param('id') id: number, @Body() updateDto: any) {
    return await this.beneficiarioService.update(+id, updateDto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async remove(@Param('id') id: number){
    await this.beneficiarioService.remove(+id);
  }
}
