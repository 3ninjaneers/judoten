import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Home from './Home.js'

Enzyme.configure({ adapter: new Adapter() })

describe("When Home renders", () => {
    
    it("displays a div", () => {
      const home = shallow(<Home />)
      const homeImg = home.find("img")
      expect(homeImg.length).toEqual(1)
    })
    it("displays a button that says Find Dojo Near You", () => {
        const home = shallow(<Home />)
        const homeButton = home.find("Button")
        expect(homeButton.length).toEqual(1)
      })
    
    it("displays three Containers", () => {
      const home = shallow(<Home />)
      const homeContainers = home.find("Container")
      expect(homeContainers.length).toEqual(5)
    })
    
    it("displays h2 tag for FAQ and About sections", () => {
      const home = shallow(<Home/>)
      const homeHowWorks = home.find("h2")
      expect(homeHowWorks.length).toEqual(2)
    })
    
    it("displays 3 cards", () => {
        const home = shallow(<Home/>)
        const homeHowWorks = home.find("Card")
        expect(homeHowWorks.length).toEqual(3)
      })
    
    it("displays 4 dropdown questions", () => {
        const home = shallow(<Home/>)
        const homeQuestions = home.find("details")
        expect(homeQuestions.length).toEqual(4)
      })
  })