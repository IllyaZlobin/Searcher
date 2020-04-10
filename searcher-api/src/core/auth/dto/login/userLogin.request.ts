import { ApiProperty } from "@nestjs/swagger";

export class UserLoginRequest {
  @ApiProperty()
  email: string;
  
  @ApiProperty()
  password: string;  
}