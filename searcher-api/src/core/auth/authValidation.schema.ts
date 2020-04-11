import { JoiRegisteredSchemas } from 'sdk';
import { UserRegisterRequestSchema } from './dto/register/userRegister.schema';
import { UserLoginRequestSchema } from './dto/login/userLogin.schema';

export const AuthValidationSchemas: JoiRegisteredSchemas = {
  UserRegisterRequest: UserRegisterRequestSchema,
  UserLoginRequest: UserLoginRequestSchema,
};
