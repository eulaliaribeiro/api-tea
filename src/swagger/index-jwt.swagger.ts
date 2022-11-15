
import { ApiProperty } from "@nestjs/swagger";

export class IndexJwtSwagger {
    
    @ApiProperty({
        description: 'token gerado para validação do usuario'
    })
    access_token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IkV1bGFsaWEiLCJzdWIiOjIsImlhdCI6MTY2ODUzNjM0MSwiZXhwIjoxNjY4NTM2OTQxfQ.s3u-YJzIirOlUlRuzHT32aZQPd3vJTxgyJvtKaOlI2Y"
}