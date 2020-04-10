import { IUser } from "../../../common/db/models/user.model";
import { ApiResponseProperty } from "@nestjs/swagger";
import { Gender } from "src/common/db/enums/gender";

export class UserDTO implements IUser {
    @ApiResponseProperty()
    id: number;

    @ApiResponseProperty()
    email: string;

    @ApiResponseProperty()
    name: string;

    @ApiResponseProperty()
    surname: string;

    @ApiResponseProperty()
    password: string;

    @ApiResponseProperty()
    token: string;

    @ApiResponseProperty()
    refresh_token: string;

    @ApiResponseProperty()
    gender: Gender;

    @ApiResponseProperty()
    age: number;
    
    @ApiResponseProperty()
    cityId: number;

    @ApiResponseProperty()
    countryId: number;
    
    @ApiResponseProperty()
    web: string;
    
} 