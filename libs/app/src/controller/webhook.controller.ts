import { Body, Controller, Post } from '@nestjs/common';
import { ContentfulWebhook } from '../interfaces/contentful/webhook.interface';
import { ContentfulPreviewService } from '../service/contentful/preview.service';

@Controller('/webhook')
export class WebhookController {
  constructor(private readonly cfPreviewService: ContentfulPreviewService) {}

  @Post('/preview')
  previewWebhook(@Body() webhook: ContentfulWebhook) {
    return this.cfPreviewService.handleWebhook(webhook);
  }

  @Post('/production')
  productionWebhook(): { ok: boolean } {
    return { ok: true };
  }
}
