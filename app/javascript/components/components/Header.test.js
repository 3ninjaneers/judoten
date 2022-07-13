import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Header from './Header'

Enzyme.configure({ adapter: new Adapter() })

describe("When Header renders", () => {
  it("displays a heading", () => {
    const header = shallow(<Header />)
    const headerHeading = header.find("h1")
    expect(headerHeading.text()).toEqual("JudoTen")
  })
  it("displays three links", () => {
    const header = shallow(<Header />)
    const headerFaqBtn = header.find("a")
    expect(headerFaqBtn.length).toEqual(3)
  })
})