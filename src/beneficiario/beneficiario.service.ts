import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateBeneficiarioDto } from './dto/create-beneficiario.dto';
import { UpdateBeneficiarioDto } from './dto/update-beneficiario.dto';
import { PaginationQueryDto } from './dto/pagination-query.dto';
import { Beneficiario } from './entities/beneficiario.entity';
import { Endereco } from 'src/endereco/entities/endereco.entity';
import { Solicitacao } from 'src/solicitacao/entities/solicitacao.entity';

@Injectable()
export class BeneficiarioService {

  constructor(
    @InjectRepository(Beneficiario) private beneficiarioRepository: Repository<Beneficiario>,
    @InjectRepository(Endereco) private enderecoRepository: Repository<Endereco>,
    @InjectRepository(Solicitacao) private solicitacaoRepository: Repository<Solicitacao>
    ) {}

  async create({beneficiarioCarteira, cid, nome, idade, sexo, responsavelCarteira, dataEntrada, endereco, solicitacoes}: CreateBeneficiarioDto) {
    const registro = this.beneficiarioRepository.save({beneficiarioCarteira, cid, nome, idade, sexo, responsavelCarteira, dataEntrada, endereco, solicitacoes});
    return this.findOne((await registro).id);
  }

  async findAll({limit, offset}: PaginationQueryDto) {
    return await this.beneficiarioRepository.find({
      relations:['endereco', 'solicitacoes'],
      skip: offset,
      take: limit,
    });
  }

  async findOne(id: number){

    const registro = await this.beneficiarioRepository.find({relations:['endereco', 'solicitacoes'], where:{id}});

    if (!registro){
      throw Error(`Beneficiário com ID '${id}' não encontrado`)
    }

    return registro;
  }

  
  async update(id: number, updateBeneficiarioDto: UpdateBeneficiarioDto) {

    const registro = this.beneficiarioRepository.findOneByOrFail({ id });

    if (!registro){
      throw Error(`Beneficiário com ID '${id}' não encontrado`)
    }

    const beneficiario = await this.beneficiarioRepository.create(updateBeneficiarioDto);

    await this.beneficiarioRepository.update({id},beneficiario);
    return await this.findOne(id);
  }

  async remove(id: number) {
    const registro = await this.findOne(id);
    await this.beneficiarioRepository.softRemove(registro);
  }
  
} 
