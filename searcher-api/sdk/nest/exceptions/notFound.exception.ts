import { HttpException, HttpStatus } from '@nestjs/common';

export class NotFoundException extends HttpException {
  errors: string[];

  constructor(message: string, property?: string[]) {
    super(message, HttpStatus.NOT_FOUND);
    this.errors = property || [];
  }
}
