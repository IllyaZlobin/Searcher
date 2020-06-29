import { UserDTO } from '../common/user.dto';

export class UserUpdateResponse {
  user: UserDTO;

  constructor(user?: UserDTO) {
    this.user = user;
  }
}
