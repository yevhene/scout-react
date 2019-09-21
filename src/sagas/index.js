import { takeLatest } from 'redux-saga/effects'

import { REQUEST_RATES } from '../actions/rates'

import requestRates from './requestRates'

export default function*() {
  yield takeLatest(REQUEST_RATES, requestRates)
}
