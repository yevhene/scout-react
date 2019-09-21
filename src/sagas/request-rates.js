import { put } from 'redux-saga/effects'

import { requestRatesSucceeded, requestRatesFailed } from '../actions/rates'

const RATES_API_URL = 'https://api.exchangeratesapi.io/latest'

export default function* requestRates() {
  try {
    const response = yield fetch(RATES_API_URL)
    const rates = yield response.json()
    if (response.ok) {
      yield put(requestRatesSucceeded(rates))
    } else {
      yield put(requestRatesFailed(rates.error))
    }
  } catch (error) {
    yield put(requestRatesFailed(error))
  }
}
