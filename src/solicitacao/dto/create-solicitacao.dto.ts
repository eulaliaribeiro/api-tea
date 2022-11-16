import { IsDate, IsNotEmpty, IsString, Length } from 'class-validator'
import {Transform, Type} from'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

export class CreateSolicitacaoDto {

@IsDate({message:"Data inválida"})
@IsNotEmpty({message:"Data da solicitação obrigatória"})
@Type(()=>Date)
@ApiProperty()
dataSolicitacao: Date;


@IsNotEmpty({message:"Médico solicitante obrigatório"})
@Length(0,60,{message:"O tamanho deve ser 0 e 60"})
@IsString({message:"Deve ser String"})
@Transform(({ value }) => value.toUpperCase())
@ApiProperty()
medicoSolicitante: string;
}
