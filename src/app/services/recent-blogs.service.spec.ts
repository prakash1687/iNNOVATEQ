import { TestBed } from '@angular/core/testing';

import { RecentBlogsService } from './recent-blogs.service';

describe('RecentBlogsService', () => {
  let service: RecentBlogsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecentBlogsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
