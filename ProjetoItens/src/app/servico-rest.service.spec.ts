import { TestBed } from '@angular/core/testing';

import { ServicoRestService } from './servico-rest.service';

describe('ServicoRestService', () => {
  let service: ServicoRestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicoRestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
