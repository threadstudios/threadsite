import { Injectable, Logger } from '@nestjs/common';
import { ContentfulItemEntity } from '../../entities/contentful/item.entity';
import { ContentStatus } from '../../enum/content-status.enum';
import { DynamoService } from '../dynamo.service';

@Injectable()
export class ContentfulItemService {
  constructor(private readonly dynamo: DynamoService) {}
  private readonly logger = new Logger(ContentfulItemService.name);

  async save(item: ContentfulItemEntity) {
    return this.dynamo.entityManager.create(item);
  }

  async get(id: string, status: ContentStatus) {
    const dynamoItem = await this.dynamo.entityManager.findOne(
      ContentfulItemEntity,
      { id, status },
    );
    if (dynamoItem) return dynamoItem;

    this.logger.log('Unable to find item in DB');
  }

  async upsert(item: ContentfulItemEntity) {
    const existing = await this.dynamo.entityManager.findOne(
      ContentfulItemEntity,
      { id: item.id, status: item.status },
    );

    if (existing) {
      return this.dynamo.entityManager.update(
        ContentfulItemEntity,
        {
          id: item.id,
          status: item.status,
        },
        {
          ...item,
        },
      );
    }

    return this.save(item);
  }
}
