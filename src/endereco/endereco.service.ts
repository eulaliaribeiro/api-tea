import { Injectable, Query } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Endereco } from './entities/endereco.entity';
import { CreateEnderecoDto } from './dto/create-endereco.dto';
import { UpdateEnderecoDto } from './dto/update-endereco.dto';
import { PaginationQueryDto } from 'src/beneficiario/dto/pagination-query.dto';


@Injectable()
export class EnderecoService {
  constructor(@InjectRepository(Endereco) private repository: Repository<Endereco>) {}

  async create(createEnderecoDto: CreateEnderecoDto) {
    const registro = await this.repository.save(createEnderecoDto);
    return this.findOne((await registro).id)
  }
  
  async findAll({limit, offset}: PaginationQueryDto) {
    return await this.repository.find({
      relations:['beneficiario'],
      skip: offset,
      take: limit,
    });
  }

  async findOne(id: number){

    const registro = await this.repository.find({relations:['beneficiario'], where:{id}});
    if (!registro){
        throw Error(`Endereço com ID '${id}' não encontrado`)
    }
    return registro;
  }

  async update(id: number, updateEnderecoDto: UpdateEnderecoDto) {
    const registro = await this.repository.findOneByOrFail({id});
    if (!registro) {
      throw Error(`Endereco com ID '${id}' não encontrado`)
    }

    const endereco = await this.repository.create(updateEnderecoDto);
    await this.repository.update({id},endereco);
    return await this.repository.findOneByOrFail({id})
  }

  async remove(id: number) {
    await this.repository.softDelete({id}); 
  }

}
