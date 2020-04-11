const bcrypt = require('bcrypt');

export const checkPassword = async (password, userPassword) => {
  const match = await bcrypt.compare(password, userPassword);
  return match;
};
