import { RESET_ERROR } from '../actions/global'
import { REQUEST_RATES_FAILED } from '../actions/rates'

export const defaultState = {}

export default function global(state = defaultState, action) {
  switch (action.type) {
    case REQUEST_RATES_FAILED:
      return { error: action.error }
    case RESET_ERROR:
      return defaultState
    default:
      return state
  }
}
