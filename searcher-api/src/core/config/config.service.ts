import { Injectable } from "@nestjs/common";
import { ConfigPath } from "./configPath";
const Config = require('config');
import { DbEntities } from "../../common/db/dbEntities";


@Injectable()
export class ConfigService {
  
  get(path: keyof ConfigPath): any {
    return Config.get(path);  
  }

  getTypeOrmConfig() {
    return {
      ...this.get('db.default'),
      entities: DbEntities  
    }  
  }
}