import { INestApplication } from "@nestjs/common";
import { JoiValidationPipe } from "../pipes/validation/joiValidation.pipe";
import { SearcherValidationSchemas } from "../../dto/searcherValidationSchemas";


export function configurePipes(app: INestApplication) {
  app.useGlobalPipes(
    new JoiValidationPipe({
      ...SearcherValidationSchemas  
    })  
  ); 
}