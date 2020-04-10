import { UserDTO } from "../user.dto";
import { ApiResponseProperty } from "@nestjs/swagger";

export class UserGetAllOutput {
  @ApiResponseProperty({ type: [UserDTO] })
  items: UserDTO[]

  @ApiResponseProperty()
  totalCount: number;
  
  constructor(items?: UserDTO[], totalCount?: number){
    this.items = items;
    this.totalCount = totalCount;
  }
}