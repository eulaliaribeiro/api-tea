
import { ApiProperty } from "@nestjs/swagger";

export class IndexAuthSwagger {
    
    @ApiProperty({
        description: 'id do usuario'
    })
     userId: number

    @ApiProperty({
        description: 'nome do usuario'
    })
     username: string

    @ApiProperty({
        description: ' senha do usuario'
    })
    password: string
     
    @ApiProperty({ type: IndexAuthSwagger, isArray: true,
        description: 'token gerado a partir do login para validação do usuario'
    })
    access_token: string
}

