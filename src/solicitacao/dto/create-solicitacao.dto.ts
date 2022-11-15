import { IsDate, IsNotEmpty, IsString, Length } from 'class-validator'
import {Transform, Type} from'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

export class CreateSolicitacaoDto {

@IsDate({message:"Dados invalida"})
@IsNotEmpty({message:"Data da solicitacao obrigatória"})
@Type(()=>Date)
@ApiProperty()
datasolicitacao:Date;


@IsNotEmpty({message:"Nome obrigatório"})
@Length(0,60,{message:"O tamanho deve ser 0 e 60"})
@IsString({message:"Deve ser String"})
@Transform(({ value }) => value.toUpperCase())
@ApiProperty()
medicosolicitante: string;

}
