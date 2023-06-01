import { TestBed } from '@angular/core/testing';

import { RolePermissionsService } from './role-permissions.service';

describe('RolePermissionsService', () => {
  let service: RolePermissionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RolePermissionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
