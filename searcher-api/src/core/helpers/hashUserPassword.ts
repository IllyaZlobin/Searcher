import { UserRegisterRequest } from "src/core/auth/dto/register/userRegister.request"
import { User } from "src/common/db/entities/user.entity";
const bcrypt = require('bcrypt');
const saltRound = 15;

export const hashPasswordAndGet = async (user: UserRegisterRequest): Promise<User> => {

  const { email, password, name, surname, gender, age, photo, city, country, web } = user;

  const userWithHashPasswod = await new Promise((resolve, reject) => {

    bcrypt.hash(password, saltRound, (err, hash) => {
      if (err) reject(err)
      const user = new User();
      user.email = email;
      user.password = hash;
      user.name = name;
      user. surname = surname;
      user.gender = gender;
      user.age = age;
      user.cityId = city;
      user.countryId = country;    
      resolve(user)
    });  
  });

  return userWithHashPasswod as User;
}