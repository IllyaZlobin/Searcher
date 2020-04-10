import { Like, getRepository } from "typeorm";
import { User } from "src/common/db/entities/user.entity";
import { ValidationException } from "src/common/exceptions/validation.exception";

export const checkEmail = async (email) => {

  const user = await getRepository(User).findOne({
    where: {
      email: Like(`${email}%`)
    }
    });
    
    return user;
}