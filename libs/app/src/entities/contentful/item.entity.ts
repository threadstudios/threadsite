import { Attribute, Entity } from '@typedorm/common';
import { ContentStatus } from '../../enum/content-status.enum';
import { BaseEntity } from '../base.entity';

@Entity({
  name: 'contentful-item',
  primaryKey: {
    partitionKey: 'CFITEM#{{id}}',
    sortKey: 'CFITEM#{{id}}',
  },
})
export class ContentfulItemEntity extends BaseEntity {
  @Attribute()
  id: string;

  @Attribute()
  version: number;

  @Attribute()
  status: ContentStatus;

  @Attribute()
  contentType: string;

  @Attribute()
  fields: Record<string, any>;
}
