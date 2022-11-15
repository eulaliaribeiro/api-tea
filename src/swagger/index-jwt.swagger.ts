
import { ApiProperty } from "@nestjs/swagger";
import { ValidateNested } from "class-validator";
import { IndexAuthSwagger } from "./index-auth.swagger";

export class IndexJwtSwagger {
    
    @ValidateNested({message:"Token para validação do usuario"})
    @ApiProperty({
        type: IndexAuthSwagger, isArray: true, 
        description: 'Autorizado o token, resultado o usuario'
    })
    access_token: string
}
