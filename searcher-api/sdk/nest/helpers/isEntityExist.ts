import { Repository } from 'typeorm';
import { NotFoundException } from '../exceptions';

export const isEntityExist = async <T>(
  entityId: number,
  repository: Repository<T>,
): Promise<void> => {
  const entity = await repository.findOne(entityId);

  if (!entity) {
    throw new NotFoundException(`Entity Id - ${entityId}, doesn't exist`, ['id']);
  }
};
