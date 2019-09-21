import {
  REQUEST_RATES,
  REQUEST_RATES_SUCCEEDED,
  REQUEST_RATES_FAILED
} from '../actions/rates'

export const defaultState = {}

export default function rates(state = defaultState, action) {
  switch (action.type) {
    case REQUEST_RATES:
      return {
        isLoading: true
      }
    case REQUEST_RATES_SUCCEEDED:
      return {
        data: action.data,
        isLoading: false
      }
    case REQUEST_RATES_FAILED:
      return {
        isLoading: false
      }
    default:
      return state
  }
}
