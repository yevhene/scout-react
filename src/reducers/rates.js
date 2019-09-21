import {
  REQUEST_RATES,
  REQUEST_RATES_SUCCEEDED,
  REQUEST_RATES_FAILED
} from '../actions/rates'

const defaultState = {
  data: { rates: {} },
  requestStatus: {
    isLoading: false
  }
}

export default function rates(state = defaultState, action) {
  switch (action.type) {
    case REQUEST_RATES:
      return {
        ...defaultState,
        requestStatus: {
          isLoading: true
        }
      }
    case REQUEST_RATES_SUCCEEDED:
      return {
        data: {
          rates: (action.data && action.data.rates) || defaultState.data.rates
        },
        requestStatus: {
          isLoading: false
        }
      }
    case REQUEST_RATES_FAILED:
      return {
        ...defaultState,
        requestStatus: {
          error: action.error,
          isLoading: false
        }
      }
    default:
      return state
  }
}
