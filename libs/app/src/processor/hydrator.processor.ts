import { PageEntity } from '../entities/page.entity';
import { ContentfulPreviewService } from '../service/contentful/preview.service';

export class Hydrator {
  private previewService: ContentfulPreviewService;
  private flattenedCache: Map<string, unknown> = new Map();

  constructor(previewService: ContentfulPreviewService) {
    this.previewService = previewService;
  }

  private async reconcileLinks(fields: Record<string, any>) {
    const resultingFields: Record<string, any> = {};

    for (const [k, v] of Object.entries(fields)) {
      if (Array.isArray(v)) {
        const newArray = [];
        for (const vi of v) {
          if (vi.sys.type === 'Link') {
            const item = await this.previewService.get(
              vi.sys.id,
              vi.sys.linkType,
            );
            item.fields = await this.reconcileLinks(item.fields);
            newArray.push(item);
          }
        }
        resultingFields[k] = newArray;
      }
      if (v.sys && v.sys.type && v.sys.type === 'Link') {
        const item = await this.previewService.get(v.sys.id, v.sys.linkType);
        item.fields = await this.reconcileLinks(item.fields);
        resultingFields[k] = item;
      }
    }

    return { ...fields, ...resultingFields };
  }

  public async hydratePage(pageEntity: PageEntity) {
    const fields = await this.reconcileLinks(pageEntity.fields);
    return fields;
  }
}
