import reducer, { defaultState } from './global'
import { RESET_ERROR } from '../actions/global'
import { REQUEST_RATES_FAILED } from '../actions/rates'

describe('todos reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(defaultState)
  })

  it('handles RESET_ERROR', () => {
    expect(
      reducer({ error: 'error' }, {
        type: RESET_ERROR
      })
    ).toEqual({})
  })

  it('handles REQUEST_RATES_FAILED', () => {
    const error = 'Request Error'
    expect(
      reducer({}, {
        type: REQUEST_RATES_FAILED,
        error
      })
    ).toEqual({
      error: error
    })
  })
})

