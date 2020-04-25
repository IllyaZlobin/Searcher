import { UserDTO } from '../common/user.dto';

export class UserCreateResponse {
  user: UserDTO;

  constructor(user?: UserDTO) {
    this.user = user;
  }
}
