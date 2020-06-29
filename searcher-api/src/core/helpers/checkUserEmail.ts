import { Like, getRepository } from 'typeorm';
import { User } from 'sdk/orm/entities/user.entity';

export const checkEmail = async (email): Promise<User> => {
  const user = await getRepository(User).findOne({
    where: {
      email: Like(`${email}%`),
    },
  });

  return user;
};
