import {
  REQUEST_RATES, REQUEST_RATES_SUCCEEDED, REQUEST_RATES_FAILED,
  requestRates, requestRatesSucceeded, requestRatesFailed
} from './rates'

describe('rates actions', () => {
  it('creates an action to request rates', () => {
    const expectedAction = {
      type: REQUEST_RATES
    }
    expect(requestRates()).toEqual(expectedAction)
  })

  it('creates an action for succeeded request', () => {
    const data = { rates: { 'IDR': 29 } }
    const expectedAction = {
      type: REQUEST_RATES_SUCCEEDED,
      data
    }
    expect(requestRatesSucceeded(data)).toEqual(expectedAction)
  })

  it('creates an action for failed request', () => {
    const error = 'Error message'
    const expectedAction = {
      type: REQUEST_RATES_FAILED,
      error
    }
    expect(requestRatesFailed(error)).toEqual(expectedAction)
  })

  it('creates an action for failed request with unknown error', () => {
    const expectedAction = {
      type: REQUEST_RATES_FAILED,
      error: 'Unknown Error'
    }
    expect(requestRatesFailed()).toEqual(expectedAction)
  })
})
