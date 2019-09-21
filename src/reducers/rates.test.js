import reducer, { defaultState } from './rates'
import {
  REQUEST_RATES, REQUEST_RATES_SUCCEEDED, REQUEST_RATES_FAILED,
  requestRates, requestRatesSucceeded, requestRatesFailed
} from '../actions/rates'

describe('todos reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(defaultState)
  })

  it('should handle REQUEST_RATES', () => {
    expect(
      reducer({}, {
        type: REQUEST_RATES
      })
    ).toEqual(expect.objectContaining({
      requestStatus: {
        isLoading: true
      }
    }))
  })

  it('should handle REQUEST_RATES_SUCCEEDED', () => {
    const data = 'data'
    expect(
      reducer({}, {
        type: REQUEST_RATES_SUCCEEDED,
        data
      })
    ).toEqual(expect.objectContaining({
      data,
      requestStatus: {
        isLoading: false
      }
    }))
  })

  it('should handle REQUEST_RATES_FAILED', () => {
    const error = 'Request Error'
    expect(
      reducer({}, {
        type: REQUEST_RATES_FAILED,
        error
      })
    ).toEqual(expect.objectContaining({
      requestStatus: {
        isLoading: false,
        error
      }
    }))
  })
})

