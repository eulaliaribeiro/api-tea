import {IsDate, IsInt, IsNotEmpty, IsNumberString, IsPositive, IsString, Length, ValidateNested } from 'class-validator'
import { Transform, Type } from 'class-transformer';
import { Endereco } from "src/endereco/entities/endereco.entity";

export class CreateBeneficiarioDto {

    @IsNotEmpty({message:"Número da carteira é obrigatório"})
    @Length(17,17,{message:"O número da carteira deve conter 17 dígitos"})
    @IsString({message:"Deve ser do tipo string"})
    @IsNumberString(IsPositive,{message:"Somente números devem ser informados"})
    beneficiarioCarteira: string
    responsavelCarteira: string

    @IsNotEmpty({message:"O código CID é obrigatório"})
    @Length(6,6,{message:"O código CID possui 6 caracteres"})
    @IsString({message:"Deve ser do tipo string"})
    cid: string
    
    @IsNotEmpty({message:"Nome obrigatório"})
    @Length(0,60,{message:"Insira um nome entre 0 e 60 caracteres"})
    @IsString({message:"Deve ser string"})
    @Transform(({ value }) => value.toUpperCase())
    nome: string;

    @IsNotEmpty({message:"Idade é obrigatório"})
    @IsInt({message:"Deve ser uma idade válida"})
    @IsPositive({message:"Deve ser um idade válida"})
    idade: number;
    
    /*@IsDate({message:"Data de entrada inválida"})
    @IsNotEmpty()
    @Type(() => Date)*/
    @IsString({message:"Deve ser String"})
    dataEntrada: string;

    @IsNotEmpty({message:"Campo sexo é obrigatório"})
    @Length(8,9,{message:"Digite feminino ou masculino"})
    @IsString({message:"Deve ser string"})
    @Transform(({ value }) => value.toUpperCase())
    sexo: string;

    @ValidateNested({message:"Tipo informado errado"})
    endereco: Endereco;

}
