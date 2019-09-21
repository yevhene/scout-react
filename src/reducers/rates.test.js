import reducer, { defaultState } from './rates'
import {
  REQUEST_RATES, REQUEST_RATES_SUCCEEDED, REQUEST_RATES_FAILED
} from '../actions/rates'

describe('todos reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(defaultState)
  })

  it('handles REQUEST_RATES', () => {
    expect(
      reducer({}, {
        type: REQUEST_RATES
      })
    ).toEqual({
      isLoading: true
    })
  })

  it('handles REQUEST_RATES_SUCCEEDED', () => {
    const data = 'data'
    expect(
      reducer({}, {
        type: REQUEST_RATES_SUCCEEDED,
        data
      })
    ).toEqual(expect.objectContaining({
      data,
      isLoading: false
    }))
  })

  it('handles REQUEST_RATES_FAILED', () => {
    const error = 'Request Error'
    expect(
      reducer({}, {
        type: REQUEST_RATES_FAILED,
        error
      })
    ).toEqual({
      isLoading: false,
    })
  })
})

