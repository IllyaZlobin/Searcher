import { JoiRegisteredSchemas } from 'sdk';
import { MovieGetListRequestSchema } from './dto/getList/movieGetListRequest.schema';
import { MovieGetListByNameRequestSchema } from './dto/getList/movieGetListByNameRequest.schema';

export const MoviesValidationSchemas: JoiRegisteredSchemas = {
  MovieGetListRequestSchema,
  MovieGetListByNameRequestSchema,
};
