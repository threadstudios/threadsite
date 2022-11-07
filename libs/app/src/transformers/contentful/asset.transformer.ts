import { Asset, Entry } from 'contentful';
import { ContentfulItemEntity } from '../../entities/contentful/item.entity';
import { ContentStatus } from '../../enum/content-status.enum';
import { ContentfulWebhook } from '../../interfaces/contentful/webhook.interface';
import { fieldToDynamo } from './field.transformer';

export function assetToItem(
  asset: Asset,
  status: ContentStatus,
): ContentfulItemEntity {
  return ContentfulItemEntity.create({
    id: asset.sys.id,
    version: asset.sys.revision,
    status,
    contentType: 'Asset',
    fields: {
      url: asset.fields.file.url,
    },
  });
}

export function entryToItem(
  entry: Entry<any>,
  status: ContentStatus,
): ContentfulItemEntity {
  const parsedFields = Object.keys(entry.fields).reduce(
    (acc: Record<string, unknown>, key) => {
      acc[key] = fieldToDynamo(entry.fields[key]);
      return acc;
    },
    {},
  );

  return ContentfulItemEntity.create({
    id: entry.sys.id,
    version: entry.sys.revision,
    status,
    contentType: entry.sys.contentType.sys.id,
    fields: parsedFields,
  });
}

export function webhookToItem(
  webhook: ContentfulWebhook,
  status: ContentStatus,
) {
  const parsedFields = Object.keys(webhook.fields).reduce(
    (acc: Record<string, unknown>, key) => {
      const unwrapped = webhook.fields[key]['en-US'];
      acc[key] = fieldToDynamo(unwrapped);
      return acc;
    },
    {},
  );

  return ContentfulItemEntity.create({
    id: webhook.sys.id,
    version: webhook.sys.version,
    status,
    contentType: webhook.sys.contentType.sys.id,
    fields: parsedFields,
  });
}
