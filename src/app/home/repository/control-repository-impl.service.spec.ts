import { TestBed } from '@angular/core/testing';

import { ControlRepositoryImplService } from './control-repository-impl.service';

describe('ControlRepositoryImplService', () => {
  let service: ControlRepositoryImplService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ControlRepositoryImplService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
