import React from 'react'
import { mount } from 'enzyme'
import configureStore from 'redux-mock-store'

import ConnectedErrorHandler, { ErrorHandler } from './ErrorHandler'
import { RESET_ERROR } from '../actions/global'

describe('ErrorHandler', () => {
  it('renders without crashing', () => {
    mount(<ErrorHandler resetError={() => {}}>{() => ''}</ErrorHandler>)
  })

  it('renders modal on error', () => {
    const error = 'Request Error'
    const store = configureStore()({ global: { error } })
    const component = mount(
      <ConnectedErrorHandler store={store}>{() => ''}</ConnectedErrorHandler>
    )
    expect(component.text()).toEqual(expect.stringContaining(error))
  })

  it('resets error on click', () => {
    const error = 'Request Error'
    const store = configureStore()({ global: { error } })
    const component = mount(
      <ConnectedErrorHandler store={store}>{() => ''}</ConnectedErrorHandler>
    )
    component.find('div.modal').simulate('click')
    expect(store.getActions()).toEqual([{ type: RESET_ERROR }])
  })
})
