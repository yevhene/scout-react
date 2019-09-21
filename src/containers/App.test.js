import React from 'react'
import { Provider } from 'react-redux'
import { mount, shallow } from 'enzyme'
import configureStore from 'redux-mock-store'

import ConnectedApp, { App } from './App'
import { REQUEST_RATES } from '../actions/rates'

describe('App', () => {
  it('renders without crashing', () => {
    shallow(<App requestRates={() => {}} />)
  })

  it('requests data on button press', () => {
    const store = configureStore()()
    const component = shallow(<ConnectedApp store={store} />)
    component
      .shallow()
      .find('button')
      .simulate('click')
    expect(store.getActions()).toEqual([{ type: REQUEST_RATES }])
  })

  it('renders content without crashing', () => {
    const store = configureStore()({ global: {} })
    mount(
      <Provider store={store}>
        <ConnectedApp />
      </Provider>
    )
  })
})
