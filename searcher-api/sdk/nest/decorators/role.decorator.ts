import { UserRoles } from 'sdk/models';
import { SetMetadata, CustomDecorator } from '@nestjs/common';

export const Role = (...roles: UserRoles[]): CustomDecorator<string> => SetMetadata('roles', roles);
