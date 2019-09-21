export const REQUEST_RATES = 'REQUEST_RATES'
export const REQUEST_RATES_SUCCEEDED = 'REQUEST_RATES_SUCCEEDED'
export const REQUEST_RATES_FAILED = 'REQUEST_RATES_FAILED'

export const requestRates = () => ({
  type: REQUEST_RATES
})

export const requestRatesSucceeded = (data) => ({
  type: REQUEST_RATES_SUCCEEDED,
  data
})

export const requestRatesFailed = (error) => ({
  type: REQUEST_RATES_FAILED,
  error: (error && error.toString()) || 'Unknown Error'
})
