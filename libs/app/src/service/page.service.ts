import { Injectable } from '@nestjs/common';
import { PageEntity } from '../entities/page.entity';
import { ContentStatus } from '../enum/content-status.enum';
import { DynamoService } from './dynamo.service';

@Injectable()
export class PageService {
  constructor(private readonly dynamo: DynamoService) {}

  async save(page: PageEntity) {
    return this.dynamo.entityManager.create(page);
  }

  async retrieve(
    url: string,
    status: ContentStatus,
  ): Promise<PageEntity | undefined> {
    const pageQuery = await this.dynamo.entityManager.find(PageEntity, 'PAGE', {
      queryIndex: 'gsi1',
      keyCondition: { EQ: `PAGE#${status}#${url}` },
    });
    return pageQuery.items[0] || undefined;
  }

  async upsert(item: PageEntity) {
    const existing = await this.dynamo.entityManager.findOne(PageEntity, {
      id: item.id,
      status: item.status,
    });

    if (existing) {
      return this.dynamo.entityManager.update(
        PageEntity,
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
