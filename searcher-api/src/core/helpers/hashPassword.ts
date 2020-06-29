import { genSalt, hash } from 'bcryptjs';

export const hashPassword = async (password: string): Promise<string> => {
  const salt = await genSalt(12);
  const hashedPassword = await hash(password, salt);

  return hashedPassword;
};
