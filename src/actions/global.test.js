import { RESET_ERROR, resetError } from './global'

describe('global', () => {
  it('creates an action to reset error', () => {
    const expectedAction = {
      type: RESET_ERROR
    }
    expect(resetError()).toEqual(expectedAction)
  })
})
