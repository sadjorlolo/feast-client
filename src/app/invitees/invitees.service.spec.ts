import { TestBed, inject } from '@angular/core/testing';

import { InviteesService } from './invitees.service';

describe('InviteesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InviteesService]
    });
  });

  it('should be created', inject([InviteesService], (service: InviteesService) => {
    expect(service).toBeTruthy();
  }));
});
