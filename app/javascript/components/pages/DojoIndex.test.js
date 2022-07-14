import React from 'react'


import Enzyme, { shallow } from 'enzyme'

import Adapter from 'enzyme-adapter-react-16'

import DojoIndex from './DojoIndex'


Enzyme.configure({ adapter: new Adapter() })

describe("When DojoIndex renders", () => {
  const props = {
    dojos: [
      {
        id: 1, 
        name: "Outliers JiuJitsu",
        address: "10251 Mast Blvd",
        city: "Santee",
        state: "CA",
        website: "http://outliersbjj.com/schedule/", 
        phone: "6197088699", 
        instructor: "Saeid", 
        email: "Jeremy@OutliersBJJ.com", 
        image: "https://upload.wikimedia.org/wikipedia/commons/c/ce/Jigoro_Kano_and_Kyuzo_Mifune_%28restoration%29.jpg",
        user_id: 1 
    }
    ]
  }
  let dojoIndexRender
  beforeEach(() => {
    dojoIndexRender = shallow(<DojoIndex {...props} />)
  })
  it("displays a heading", () => {
    const dojoIndexHeading = dojoIndexRender.find("h3")
    expect(dojoIndexHeading.length).not.toBe(0)
  })
  it("displays a card from ReactStrap per dojo ", () => {
    const dojoIndexCard = dojoIndexRender.find("Card")
    expect(dojoIndexCard.length).not.toBe(0)
  })
})