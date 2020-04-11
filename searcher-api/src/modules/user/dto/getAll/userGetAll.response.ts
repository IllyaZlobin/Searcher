import { UserDTO } from "../user.dto";

export class UserGetAllResponse {
  items: UserDTO[]
  totalCount: number;
  
  constructor(items?: UserDTO[], totalCount?: number){
    this.items = items;
    this.totalCount = totalCount;
  }
}