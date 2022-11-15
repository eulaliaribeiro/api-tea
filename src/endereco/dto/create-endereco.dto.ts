import {IsDate, IsInt, IsNotEmpty, IsNumberString, IsPositive, IsString, Length, ValidateNested } from 'class-validator'
import { Transform, Type } from 'class-transformer';
import { Beneficiario } from 'src/beneficiario/entities/beneficiario.entity';

export class CreateEnderecoDto {

@IsNotEmpty({message:"O código da UF é obrigatório"})
@Length(2,2,{message:"O código da UF possui 2 caracateres"})
@IsString({message:"Deve ser do tipo string"})
uf: string

@IsNotEmpty({message:"O nome da cidade é obrigatório"})
@Length(2,40,{message:"O nome da cidade possui entre 2 e 40 caracateres"})
@IsString({message:"Deve ser do tipo string"})
cidade: string


@IsNotEmpty({message:"O nome do bairro é obrigatório"})
@Length(2,80,{message:"O nome do bairro possui entre 2 e 80 caracateres"})
@IsString({message:"Deve ser do tipo string"})
bairro: string

@Length(8,8,{message:"O numero do cep possui 8 caracteres"})
@IsNotEmpty({message:"Cep é obrigatório"})
@IsPositive()
cep :string

@IsNotEmpty({message:"O nome da rua é obrigatório"})
@Length(2,100,{message:"O nome da rua possui entre 2 e 100 caracateres"})
@IsString({message:"Deve ser do tipo string"})
rua: string

@IsNotEmpty({message:"Numero da residencia é obrigatório"})
@IsPositive()
numero :number

@IsNotEmpty({message:"O nome do complemento é facultativo"})
@Length(0,100,{message:"O nome do complemento possui entre 0 e 200 caracateres"})
@IsString({message:"Deve ser do tipo string"})
complemento: string


}










