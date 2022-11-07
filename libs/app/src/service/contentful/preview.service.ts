import { Injectable } from '@nestjs/common';

import { ContentfulClientApi, createClient } from 'contentful';
import { ContentfulItemEntity } from '../../entities/contentful/item.entity';
import { PageEntity } from '../../entities/page.entity';
import { ContentStatus } from '../../enum/content-status.enum';
import { ContentfulWebhook } from '../../interfaces/contentful/webhook.interface';
import {
  assetToItem,
  entryToItem,
  webhookToItem,
} from '../../transformers/contentful/asset.transformer';
import { PageService } from '../page.service';
import { ContentfulItemService } from './item.service';

@Injectable()
export class ContentfulPreviewService {
  private client: ContentfulClientApi;

  constructor(
    private readonly itemService: ContentfulItemService,
    private readonly pageService: PageService,
  ) {
    this.client = createClient({
      space: process.env.CONTENTFUL_SPACE,
      host: 'preview.contentful.com',
      accessToken: process.env.CONTENTFUL_PREVIEW_API_KEY,
    });
  }

  async handleWebhook(webhook: ContentfulWebhook) {
    switch (webhook.sys.type) {
      case 'Asset':
        const fullAsset = await this.getAsset(webhook.sys.id);
        const asset = assetToItem(fullAsset, ContentStatus.PREVIEW);
        await this.itemService.upsert(asset);
        return asset;
      case 'Entry':
        const entry = webhookToItem(webhook, ContentStatus.PREVIEW);
        await this.itemService.upsert(entry);
        if (entry.contentType === 'page') {
          await this.pageService.upsert(
            PageEntity.create({
              id: entry.id,
              status: entry.status,
              fields: entry.fields,
              url: entry.fields.pageUrl as string,
            }),
          );
        }
        return entry;
    }
  }

  async get(
    id: string,
    linkType: string,
  ): Promise<ContentfulItemEntity | undefined> {
    const dbRecord = await this.itemService.get(id, ContentStatus.PREVIEW);
    if (dbRecord) return dbRecord;
    switch (linkType) {
      case 'Asset':
        const asset = await this.getAsset(id);
        const assetItem = assetToItem(asset, ContentStatus.PREVIEW);
        await this.itemService.upsert(assetItem);
        return assetItem;
      default:
        const entry = await this.getEntry(id);
        const entryItem = entryToItem(entry, ContentStatus.PREVIEW);
        await this.itemService.upsert(entryItem);
        return entryItem;
    }
  }

  async getEntry(id: string) {
    const entry = await this.client.getEntry(id, { include: 0 });
    return entry;
  }

  async getAsset(id: string) {
    const asset = await this.client.getAsset(id);
    return asset;
  }
}
