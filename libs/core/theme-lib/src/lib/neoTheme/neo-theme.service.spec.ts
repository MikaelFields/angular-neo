import { TestBed } from '@angular/core/testing';

import { NeoThemeService } from './neo-theme.service';

describe('NeoThemeService', () => {
  let service: NeoThemeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NeoThemeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
