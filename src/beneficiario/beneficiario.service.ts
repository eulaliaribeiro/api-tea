import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateBeneficiarioDto } from './dto/create-beneficiario.dto';
import { UpdateBeneficiarioDto } from './dto/update-beneficiario.dto';
import { Beneficiario } from './entities/beneficiario.entity';

@Injectable()
export class BeneficiarioService {

  constructor(@InjectRepository(Beneficiario) private repository: Repository<Beneficiario>) {}

  async create(createBeneficiarioDto: CreateBeneficiarioDto) {
    const registro = this.repository.save(createBeneficiarioDto);
    return this.findOne((await registro).id);
  }

  async findAll() {
    return await this.repository.find({relations:{endereco:true}});
  }

  async findOne(id: number){

    const registro = await this.repository.find({relations:{endereco:true}, where:{id}});

    if (!registro){
      throw Error(`Beneficiário com ID '${id}' não encontrado`)
    }

    return registro;
  }

  
  async update(id: number, updateBeneficiarioDto: UpdateBeneficiarioDto) {

    const registro = this.repository.findOneByOrFail({ id });

    if (!registro){
      throw Error(`Beneficiário com ID '${id}' não encontrado`)
    }

    const beneficiario = await this.repository.create(updateBeneficiarioDto);

    await this.repository.update({id},beneficiario);
    return await this.findOne(id);
  }

  async remove(id: number) {
    const registro = await this.findOne(id);
    await this.repository.softRemove(registro);
  }
  
} 
