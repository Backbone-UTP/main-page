import { TestBed } from '@angular/core/testing';
import { provideRouter, Router } from '@angular/router';

import { routes } from './app.routes';

describe('application routes', () => {
  it('uses the Angular wildcard syntax and redirects to the main page', () => {
    const fallbackRoute = routes.at(-1);

    expect(fallbackRoute?.path).toBe('**');
    expect(fallbackRoute?.redirectTo).toBe('');
  });

  it('redirects an unknown URL to the main page', async () => {
    TestBed.configureTestingModule({
      providers: [provideRouter(routes)],
    });
    const router = TestBed.inject(Router);

    await router.navigateByUrl('/unknown-event');

    expect(router.url).toBe('/');
  });
});
