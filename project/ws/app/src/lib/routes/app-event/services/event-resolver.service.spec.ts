import { TestBed } from '@angular/core/testing'

import { EventResolverService } from './event-resolver.service'

describe('EventResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}))

  it('should be created', () => {
    const service: EventResolverService = TestBed.inject(EventResolverService)
    expect(service).toBeTruthy()
  })
})
