import { UserDTO } from '../common/user.dto';

export class UserGetByIdResponse {
  user: UserDTO;

  constructor(user?: UserDTO) {
    this.user = user;
  }
}
