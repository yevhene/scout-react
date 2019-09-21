import { runSaga } from 'redux-saga'

import requestRates from './requestRates'
import { REQUEST_RATES_SUCCEEDED, REQUEST_RATES_FAILED } from '../actions/rates'

describe('requestRates', () => {
  beforeEach(() => {
    fetch.resetMocks()
  })

  it('puts succeed action after fetches data', async () => {
    const data = { data: 'data' }
    fetch.once(JSON.stringify(data))

    const dispatched = []
    await runSaga(
      {
        dispatch: (action) => dispatched.push(action)
      },
      requestRates
    ).toPromise()

    expect(dispatched).toEqual([{ type: REQUEST_RATES_SUCCEEDED, data }])
  })

  it('puts fail action if receives error', async () => {
    const error = 'Request Error'
    fetch.once(JSON.stringify({ error }), { status: 400 })

    const dispatched = []
    await runSaga(
      {
        dispatch: (action) => dispatched.push(action)
      },
      requestRates
    ).toPromise()

    expect(dispatched).toEqual([{ type: REQUEST_RATES_FAILED, error }])
  })

  it('puts fail action if catches', async () => {
    fetch.once('wrong request')

    const dispatched = []
    await runSaga(
      {
        dispatch: (action) => dispatched.push(action)
      },
      requestRates
    ).toPromise()

    expect(dispatched).toEqual([
      {
        type: REQUEST_RATES_FAILED,
        error: expect.any(String)
      }
    ])
  })
})
