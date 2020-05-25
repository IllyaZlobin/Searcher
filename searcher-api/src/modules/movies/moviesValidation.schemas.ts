import { JoiRegisteredSchemas } from 'sdk';
import { MovieGetListRequestSchema } from './dto/getList/movieGetListRequest.schema';

export const MoviesValidationSchemas: JoiRegisteredSchemas = {
  MovieGetListRequestSchema,
};
