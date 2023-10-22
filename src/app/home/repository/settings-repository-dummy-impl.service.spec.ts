import { TestBed } from '@angular/core/testing';

import { SettingsRepositoryDummyImplService } from './settings-repository-dummy-impl.service';

describe('SettingsRepositoryDummyImplService', () => {
  let service: SettingsRepositoryDummyImplService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SettingsRepositoryDummyImplService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
