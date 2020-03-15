import { Movies } from "./movies/movies.entity";
import { MpaaRating } from "./movies/mpaa.entity";
import { Names } from "./names/names.entity";
import { ProdCompany } from "./prodcompany/prodcompany.entity";
import { Country } from "./country/country.entity";
import { City } from "./city/city.entity";
import { Actor } from "./actor/actor.entity";
import { User } from "./user/user.entity";
import { Reviews } from "./reviews/reviews.entity";
import { Actors } from "./movies/actors.entity";
import { Genres } from "./movies/genres.entity";
import { Directors } from "./movies/directors.entity";

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
  Directors 
]