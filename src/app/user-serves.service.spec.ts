import { TestBed } from '@angular/core/testing';

import { UserServesService } from './user-serves.service';

describe('UserServesService', () => {
  let service: UserServesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserServesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
