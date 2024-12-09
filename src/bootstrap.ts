import { APP_BASE_HREF } from '@angular/common';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';

export const bootstrap = (container?: HTMLElement, basePath: string = '/') => {
  platformBrowserDynamic([{ provide: APP_BASE_HREF, useValue: basePath }])
    .bootstrapModule(AppModule)
    .then(() => {
      const appElement = document.createElement('app-root');
      container?.appendChild(appElement);
    })
    .catch((err) => console.error(err));
};
