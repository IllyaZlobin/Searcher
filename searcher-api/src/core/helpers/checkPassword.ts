import { bcrypt } from 'bcrypt';

export const checkPassword = async (password, userPassword): Promise<any> => {
  const match = await bcrypt.compare(password, userPassword);
  return match;
};
