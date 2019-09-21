import { takeLatest } from 'redux-saga/effects'

import { REQUEST_RATES } from '../actions/rates'

import requestRates from './request-rates'

export default function*() {
  yield takeLatest(REQUEST_RATES, requestRates)
}
