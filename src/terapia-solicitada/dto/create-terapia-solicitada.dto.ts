import {IsAlpha, IsDate, IsNotEmpty, IsNumber, IsNumberString, IsOptional, IsPositive, IsString, Length, length, max, ValidateNested } from 'class-validator'
import {Transform, Type} from'class-transformer';
import { TerapiaSolicitada } from 'src/terapia-solicitada/entities/terapia-solicitada.entity';

export class CreateTerapiaSolicitadaDto {


@IsNotEmpty({message:"Nome da terapia é obrigatório"})
@Length(1,100,{message:"O tamanho deve ser 1 e 100"})
@IsString({message:"Deve ser String"})
@Transform(({ value }) => value.toUpperCase())
nome: String;


@IsNotEmpty({message:"Nome da metodo é obrigatório"})
@Length(1,20,{message:"O tamanho deve ser 1 e 20"})
@IsString({message:"Deve ser String"})
@Transform(({ value }) => value.toUpperCase())
metodoTerapeutico: String;


@IsNotEmpty({message:"Numero das sessões é obrigatório"})
@IsPositive()
qtdsessoes :number


}
