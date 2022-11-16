import { Injectable, Query } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Solicitacao } from './entities/solicitacao.entity';
import { CreateSolicitacaoDto } from './dto/create-solicitacao.dto';
import { UpdateSolicitacaoDto } from './dto/update-solicitacao.dto';
import { PaginationQueryDto } from 'src/beneficiario/dto/pagination-query.dto';


@Injectable()
export class SolicitacaoService {
  constructor(@InjectRepository(Solicitacao) private solicitacaoRepository: Repository<Solicitacao>) {}

  async create(createSolicitacaoDto: CreateSolicitacaoDto) {
    const registro = await this.solicitacaoRepository.save(createSolicitacaoDto);
    return this.findOne((await registro).id)
  }
  
  async findAll({limit, offset}: PaginationQueryDto) {
    return await this.solicitacaoRepository.find({
      relations:['beneficiario'],
      skip: offset,
      take: limit,
    });
  }

  async findOne(id: number){

    const registro = await this.solicitacaoRepository.find({relations:['beneficiario'], where:{id}});
    if (!registro){
        throw Error(`Solicitação com ID '${id}' não encontrado`)
    }
    return registro;
  }

  async update(id: number, updateSolicitacaoDto: UpdateSolicitacaoDto) {
    const registro = await this.solicitacaoRepository.findOneByOrFail({id});
    if (!registro) {
      throw Error(`Solicitação com ID '${id}' não encontrado`)
    }

    const solicitacao = await this.solicitacaoRepository.create(updateSolicitacaoDto);
    await this.solicitacaoRepository.update({id},solicitacao);
    return await this.solicitacaoRepository.findOneByOrFail({id})
  }

  async remove(id: number) {
    await this.solicitacaoRepository.softDelete({id}); 
  }

}
