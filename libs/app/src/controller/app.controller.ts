import { Controller, Get, Render, Req } from '@nestjs/common';
import { Request } from 'express';
import { ContentStatus } from '../enum/content-status.enum';
import { Hydrator } from '../processor/hydrator.processor';
import { ContentfulPreviewService } from '../service/contentful/preview.service';
import { PageService } from '../service/page.service';

@Controller()
export class AppController {
  constructor(
    private readonly pageService: PageService,
    private readonly previewService: ContentfulPreviewService,
  ) {}

  @Get('/*')
  @Render('home')
  async pageRender(@Req() req: Request) {
    const page = await this.pageService.retrieve(
      req.originalUrl,
      ContentStatus[process.env.APP_ENV],
    );

    console.log(page);

    if (!page) {
      return { message: 404 };
    }

    if (ContentStatus[process.env.APP_ENV] === ContentStatus.PREVIEW) {
      const pageHydrator = new Hydrator(this.previewService);
      page.fields = await pageHydrator.hydratePage(page);
    }

    return { message: 'Hello', content: page.fields };
  }
}
