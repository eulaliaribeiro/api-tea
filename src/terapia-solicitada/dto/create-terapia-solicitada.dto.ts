import { ApiProperty } from "@nestjs/swagger";
import { Transform } from "class-transformer";
import { IsNotEmpty, IsNumber, IsPositive, IsString, Length } from "class-validator";

export class CreateTerapiaSolicitadaDto {
    
    @IsNotEmpty({message:"Nome obrigatório"})
    @Length(0,60,{message:"Insira um nome entre 0 e 60 caracteres"})
    @IsString({message:"Deve ser string"})
    @Transform(({ value }) => value.toUpperCase())
    @ApiProperty()
    nome: string;

    @IsNotEmpty({message:"Campo método terapeutico é obrigatório"})
    @Length(0,60,{message:"Digite o nome do método terapeutico"})
    @IsString({message:"Deve ser string"})
    @Transform(({ value }) => value.toUpperCase())
    @ApiProperty()
    metodoTerapeutico: string;

    @IsNotEmpty({message:"Quantidade de sessões"})
    @IsNumber()
    @IsPositive({message:"Deve ser uma quantidade maior que 0"})
    @ApiProperty()
    qtdSessoes: number;
  

}
