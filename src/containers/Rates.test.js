import React from 'react'
import { mount } from 'enzyme'
import configureStore from 'redux-mock-store'

import ConnectedRates, { Rates } from './Rates'

describe('Rates', () => {
  it('renders without crashing', () => {
    mount(<Rates />)
  })

  it('renders rates from store', () => {
    const currency = 'GBP'
    const rate = 42
    const store = configureStore()({
      rates: {
        data: {
          rates: { [currency]: rate }
        }
      }
    })
    const component = mount(<ConnectedRates store={store} />)
    const tds = component.find('td')
    expect(tds.length).toBe(2)
    expect(tds.at(0).text()).toBe(currency)
    expect(tds.at(1).text()).toBe(rate.toString())
  })

  it('renders loading if data is not ready', () => {
    const component = mount(<Rates isLoading={true} />)
    expect(component.text()).toEqual(expect.stringContaining('Loading'))
  })

  it('renders nothing if no data', () => {
    const component = mount(<Rates />)
    expect(component.children().length).toBe(0)
  })
})
