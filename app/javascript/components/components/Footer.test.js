import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Footer from './Footer'

Enzyme.configure({ adapter: new Adapter() })

describe("When Footer renders", () => {
  it("displays a Container", () => {
    const footer = shallow(<Footer />)
    const footerContainer = footer.find("Container")
    expect(footerContainer.length).toEqual(1)
  })
  it("displays three links", () => {
    const footer = shallow(<Footer />)
    const footerLinks = footer.find("NavLink")
    expect(footerLinks.length).toEqual(6)
  })
  it("displays p tag containing copyright info", () => {
    const footer = shallow(<Footer />)
    const footerCopyright = footer.find("p")
    expect(footerCopyright.exists()).toEqual(true)
  })
})