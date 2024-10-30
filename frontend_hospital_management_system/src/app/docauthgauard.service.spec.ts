import { TestBed } from '@angular/core/testing';

import { DocauthgauardService } from './docauthgauard.service';

describe('DocauthgauardService', () => {
  let service: DocauthgauardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DocauthgauardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
