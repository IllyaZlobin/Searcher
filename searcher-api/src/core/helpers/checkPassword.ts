import { bcrypt } from 'bcrypt';

export const checkPassword = async (password, userPassword): Promise<void> => {
  const match = await bcrypt.compare(password, userPassword);
  return match;
};
