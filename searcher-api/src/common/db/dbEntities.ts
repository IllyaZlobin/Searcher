import { Movies } from "./entities/movies.entity";
import { MpaaRating } from "./entities/mpaa.entity";
import { Names } from "./entities/names.entity";
import { ProdCompany } from "./entities/prodcompany.entity";
import { Country } from "./entities/country.entity";
import { City } from "./entities/city.entity";
import { Actor } from "./entities/actor.entity";
import { User } from "./entities/user.entity";
import { Reviews } from "./entities/reviews.entity";
import { Actors } from "./entities/actors.entity";
import { Genres } from "./entities/genres.entity";
import { Directors } from "./entities/directors.entity";
import { UserPhoto } from "./entities/userphoto.entity";
import { UserInfoVw } from "./views/userInfo.view";

export const DbEntities = [
  Movies,
  MpaaRating,
  Names,
  ProdCompany,
  Country,
  City,
  Actor,
  User,
  Reviews,
  Actors,
  Genres,
  Directors,
  UserPhoto,
  UserInfoVw
]