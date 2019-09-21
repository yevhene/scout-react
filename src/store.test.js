import configureStore from './store'

describe('store', () => {
  it('configures without crashing', () => {
    configureStore()
  })

  it('correctly initializes store', () => {
    const rates = { data: 'data' }
    const store = configureStore({ rates })

    expect(store.getState()).toEqual(expect.objectContaining({ rates }))
  })
})
