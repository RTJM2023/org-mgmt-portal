import { TestBed } from '@angular/core/testing'

import { LoginRootService } from './login-root.service'

describe('LoginRootService', () => {
  beforeEach(() => TestBed.configureTestingModule({}))

  it('should be created', () => {
    const service: LoginRootService = TestBed.inject(LoginRootService)
    expect(service).toBeTruthy()
  })
})
