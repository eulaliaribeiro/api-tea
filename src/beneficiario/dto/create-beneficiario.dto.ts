import {IsDate, IsInt, IsNotEmpty, IsNumberString, IsPositive, IsString, Length, ValidateNested } from 'class-validator'
import { Transform, Type } from 'class-transformer';
import { Endereco } from "src/endereco/entities/endereco.entity";
import { ApiProperty } from '@nestjs/swagger';
import { IndexEnderecoSwagger } from 'src/swagger/index-endereco.swagger';
import { Solicitacao } from 'src/solicitacao/entities/solicitacao.entity';
import { IndexSolicitacaoSwagger } from 'src/swagger/index-solicitacao.swagger';

export class CreateBeneficiarioDto {

    @IsNotEmpty({message:"Número da carteira é obrigatório"})
    @Length(17,17,{message:"O número da carteira deve conter 17 dígitos"})
    @IsString({message:"Deve ser do tipo string"})
    @IsNumberString(IsPositive,{message:"Somente números devem ser informados"})
    @ApiProperty()
    beneficiarioCarteira: string
    @ApiProperty()
    responsavelCarteira: string

    @IsNotEmpty({message:"O código CID é obrigatório"})
    @Length(6,6,{message:"O código CID possui 6 caracteres"})
    @IsString({message:"Deve ser do tipo string"})
    @ApiProperty()
    cid: string
    
    @IsNotEmpty({message:"Nome obrigatório"})
    @Length(0,60,{message:"Insira um nome entre 0 e 60 caracteres"})
    @IsString({message:"Deve ser string"})
    @Transform(({ value }) => value.toUpperCase())
    @ApiProperty()
    nome: string;

    @IsNotEmpty({message:"Idade é obrigatório"})
    @IsInt({message:"Deve ser uma idade válida"})
    @IsPositive({message:"Deve ser um idade válida"})
    @ApiProperty()
    idade: number;

    @IsDate({message:"Data inválida"})
    @IsNotEmpty({message:"Data da entrada obrigatória"})
    @Type(()=>Date)
    @ApiProperty()
    dataEntrada:Date;

    @IsNotEmpty({message:"Campo sexo é obrigatório"})
    @Length(8,9,{message:"Digite feminino ou masculino"})
    @IsString({message:"Deve ser string"})
    @Transform(({ value }) => value.toUpperCase())
    @ApiProperty()
    sexo: string;

    @ValidateNested({message:"Tipo informado errado"})
    @ApiProperty({ type: IndexEnderecoSwagger, isArray: true })
    endereco: Endereco;

    @ValidateNested({message:"Tipo informado errado"})
    @ApiProperty({ type: IndexSolicitacaoSwagger, isArray: true })
    solicitacoes: Solicitacao[];

}
