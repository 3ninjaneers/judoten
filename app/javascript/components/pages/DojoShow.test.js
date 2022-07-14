import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import DojoShow from './DojoShow'


Enzyme.configure({ adapter: new Adapter() })

describe("When DojoShow renders", () => {
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
  let dojoShowRender
  beforeEach(() => {
    dojoShowRender = shallow(<DojoShow {...props} />)
  })
  it("displays a heading", () => {
    const dojoShowHeading = dojoShowRender.find("h3")
    expect(dojoShowHeading.length).not.toBe(0)
  })
  it("displays a Container from ReactStrap per dojo ", () => {
    const dojoShowCard = dojoShowRender.find("Container")
    expect(dojoShowCard.length).toEqual(1)
  })
  it("displays a Div from ReactStrap per dojo ", () => {
    const dojoShowDiv = dojoShowRender.find("div")
    expect(dojoShowDiv.length).not.toBe(0)
  })
})