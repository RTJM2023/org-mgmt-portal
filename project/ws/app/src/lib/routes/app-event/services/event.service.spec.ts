import { TestBed } from '@angular/core/testing'

import { EventService } from './event.service'

describe('EventService', () => {
  beforeEach(() => TestBed.configureTestingModule({}))

  it('should be created', () => {
    const service: EventService = TestBed.inject(EventService)
    expect(service).toBeTruthy()
  })
})
