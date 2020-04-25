/* import { User } from 'sdk/orm/entities/user.entity';

import { bcrypt } from 'bcrypt';

const saltRound = 15;

export const hashPasswordAndGet = async (model: UserRegisterRequest): Promise<User> => {
  const { email, password, name, surname, gender, age, city, country } = model;

  const userWithHashPasswod = await new Promise((resolve, reject) => {
    bcrypt.hash(password, saltRound, (err, hash) => {
      if (err) reject(err);
      const user = new User();
      user.email = email;
      user.password = hash;
      user.name = name;
      user.surname = surname;
      user.gender = gender;
      user.age = age;
      user.cityId = city;
      user.countryId = country;
      resolve(user);
    });
  });

  return userWithHashPasswod as User;
}; */
