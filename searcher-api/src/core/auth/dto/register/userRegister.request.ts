import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { Gender } from "src/common/db/enums/gender";

export class UserRegisterRequest {
  @ApiProperty()
  email: string;

  @ApiProperty()
  password: string;

  @ApiProperty()
  name: string;

  @ApiPropertyOptional()
  surname?: string;

  @ApiProperty()
  gender: Gender;

  @ApiProperty()
  age: number;

  @ApiPropertyOptional()
  photo?: number;

  @ApiPropertyOptional()
  city?: number;

  @ApiPropertyOptional()
  country?: number;

  @ApiPropertyOptional()
  web?: string;
}