import { TestBed } from '@angular/core/testing';

import { WikiFilmService } from './wiki-film.service';

describe('WikiFilmService', () => {
  let service: WikiFilmService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WikiFilmService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
