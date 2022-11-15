import {IsAlpha, IsDate, IsNotEmpty, IsNumber, IsNumberString, IsOptional, IsPositive, IsString, Length, length, max, ValidateNested } from 'class-validator'
import {Transform, Type} from'class-transformer';
import { TerapiaSolicitada } from 'src/terapia-solicitada/entities/terapia-solicitada.entity';

export class CreateSolicitacaoDto {

@IsDate({message:"Dados invalida"})
@IsNotEmpty({message:"Data da solicitacao obrigatória"})
@Type(()=>Date)
datasolicitacao:Date;


@IsNotEmpty({message:"Nome obrigatório"})
@Length(0,60,{message:"O tamanho deve ser 0 e 60"})
@IsString({message:"Deve ser String"})
@Transform(({ value }) => value.toUpperCase())
medicosolicitante: String;

}
