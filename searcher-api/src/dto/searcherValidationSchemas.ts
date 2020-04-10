import { JoiRegisteredSchemas } from "../common/pipes/validation/joiRegisteredSchemas";
import { UserRegisterRequestSchema } from "../core/auth/dto/register/userRegister.schema"
import { UserLoginRequestSchema } from "src/core/auth/dto/login/userLogin.schema";


export const SearcherValidationSchemas: JoiRegisteredSchemas = {
  UserRegisterRequest: UserRegisterRequestSchema,
  UserLoginRequest: UserLoginRequestSchema
}