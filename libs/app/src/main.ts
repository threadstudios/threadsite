import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import * as nunjucks from 'nunjucks';
import { join } from 'path';
import { AppModule } from './app.module';
import { ContentStatus } from './enum/content-status.enum';
import { ComponentRender } from './util/component-render';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  const viewsDir = join(__dirname, '..', 'views');

  const env = new nunjucks.Environment(
    new nunjucks.FileSystemLoader(join(__dirname, '..', 'views'), {
      noCache: process.env.APP_ENV === ContentStatus.PREVIEW,
      watch: process.env.APP_ENV === ContentStatus.PREVIEW,
    }),
  );
  env.addExtension('component', new ComponentRender(env));
  env.express(app.getHttpAdapter().getInstance());

  app.useStaticAssets(join(__dirname, '..', 'public'));
  app.setBaseViewsDir(viewsDir);
  app.setViewEngine('njk');

  await app.listen(process.env.PORT || 3000);
}
bootstrap();
