import { Injectable, PipeTransform, ArgumentMetadata } from "@nestjs/common";
import { JoiRegisteredSchemas } from "./joiRegisteredSchemas";
import { ValidationException } from "../../../common/exceptions/validation.exception";


@Injectable()
export class JoiValidationPipe implements PipeTransform {
  constructor(private schemas: JoiRegisteredSchemas) {}

  transform(value: any, metadata: ArgumentMetadata) {
    const validationSchemaKey = metadata.metatype?.name;
    if (!validationSchemaKey || !this.schemas[validationSchemaKey]) {
      return value;
    }

    const validationResult = this.schemas[validationSchemaKey].validate(value, {abortEarly : false});

    if (!validationResult.error) {
      return validationResult.value;
    }

    const errors = validationResult.error.details.map(error => ({
      message: error.message,
      property: error.path.map(i => i.toString()),
    }));

    throw new ValidationException(errors);
  }
}