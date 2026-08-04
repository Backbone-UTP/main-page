import { TestBed } from '@angular/core/testing';
import { provideRouter, Router } from '@angular/router';
import { RouterTestingHarness } from '@angular/router/testing';

import { routes } from './app.routes';
import { CodeOfConductComponent } from './pages/code-of-conduct/code-of-conduct.component';

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

  it('resolves and renders the Code of Conduct page', async () => {
    TestBed.configureTestingModule({
      providers: [provideRouter(routes)],
    });
    const harness = await RouterTestingHarness.create();

    const component = await harness.navigateByUrl(
      '/code-of-conduct',
      CodeOfConductComponent,
    );
    const page = harness.routeNativeElement;

    expect(component).toBeInstanceOf(CodeOfConductComponent);
    expect(page?.querySelector('h1')?.textContent).toContain(
      'Código de Conducta de Backbone UTP',
    );
    expect(page?.textContent).toContain('Contacto');
    expect(page?.querySelector('app-footer')).toBeTruthy();
  });
});
