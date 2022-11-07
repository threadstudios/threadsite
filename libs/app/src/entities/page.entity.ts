import { Attribute, Entity, INDEX_TYPE } from '@typedorm/common';
import { ContentStatus } from '../enum/content-status.enum';
import { BaseEntity } from './base.entity';

@Entity({
  name: 'page',
  primaryKey: {
    partitionKey: 'PAGE#{{id}}',
    sortKey: 'PAGE#{{status}}',
  },
  indexes: {
    gsi1: {
      type: INDEX_TYPE.GSI,
      partitionKey: 'PAGE',
      sortKey: 'PAGE#{{status}}#{{url}}',
    },
  },
})
export class PageEntity extends BaseEntity {
  @Attribute()
  id: string;

  @Attribute()
  status: ContentStatus;

  @Attribute()
  url: string;

  @Attribute()
  fields: Record<string, unknown>;
}
