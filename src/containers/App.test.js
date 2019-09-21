import React from 'react'
import { shallow } from 'enzyme'
import configureStore from 'redux-mock-store'

import ConnectedApp, { App } from './App'
import { REQUEST_RATES } from '../actions/rates'

describe('App', () => {
  it('renders without crashing', () => {
    shallow(<App />)
  })

  it('requests data on button press', () => {
    const store = configureStore()()
    const component = shallow(<ConnectedApp store={store} />)
    component.shallow().find('button').simulate('click')
    expect(store.getActions()).toEqual([{ type: REQUEST_RATES }])
  })
})
