import { JoiRegisteredSchemas } from 'sdk';
import { LoginRequestSchema } from './login/loginRequest.schema';

export const AuthValidationSchemas: JoiRegisteredSchemas = {
  LoginRequest: LoginRequestSchema,
};
