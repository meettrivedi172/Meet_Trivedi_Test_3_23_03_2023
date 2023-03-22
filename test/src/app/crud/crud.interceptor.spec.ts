import { TestBed } from '@angular/core/testing';

import { CrudInterceptor } from './crud.interceptor';

describe('CrudInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      CrudInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: CrudInterceptor = TestBed.inject(CrudInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
