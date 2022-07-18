import React from "react";

import Enzyme, { shallow } from "enzyme";

import Adapter from "enzyme-adapter-react-16";

import About from "./AboutUs";

Enzyme.configure({ adapter: new Adapter() });

describe("When About renders", () => {
  let aboutRender;
  beforeEach(() => {
    aboutRender = shallow(<About />);
  });

  it("displays a heading", () => {
    const aboutHeading = aboutRender.find("h2");
    expect(aboutHeading.length).not.toBe(0);
  });
  it("displays a an image for each member of the team ", () => {
    const aboutProfileImages = aboutRender.find("img");
    expect(aboutProfileImages.length).toBe(3);
  });
});
