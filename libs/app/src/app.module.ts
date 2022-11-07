import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './controller/app.controller';
import { WebhookController } from './controller/webhook.controller';
import { ContentfulItemService } from './service/contentful/item.service';
import { ContentfulPreviewService } from './service/contentful/preview.service';
import { DynamoService } from './service/dynamo.service';
import { PageService } from './service/page.service';
import { ThreadTable } from './service/thread.table.service';

@Module({
  imports: [ConfigModule.forRoot()],
  controllers: [WebhookController, AppController],
  providers: [
    ThreadTable,
    DynamoService,
    PageService,
    ContentfulPreviewService,
    ContentfulItemService,
  ],
})
export class AppModule {}
