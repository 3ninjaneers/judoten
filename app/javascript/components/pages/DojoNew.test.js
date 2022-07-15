import React from "react";

import Enzyme, { shallow } from "enzyme";

import Adapter from "enzyme-adapter-react-16";

import DojoNew from "./DojoNew";

Enzyme.configure({ adapter: new Adapter() });

describe("When DojoIndex renders", () => {
  let renderedDojoNew
  beforeEach(() => {
    renderedDojoNew = shallow(<DojoNew />);
  });
  it('displays a form to make a new dojo', () => {
    const dojoNewRender = renderedDojoNew.find('Form')
    expect(dojoNewRender.length).toEqual(1)
})
it('displays an input for a dojo name', () => {
    const dojoNewRender = renderedDojoNew.find('[name="name"]')
    expect(dojoNewRender.length).toEqual(1)
})
it('displays an input for a dojo address', () => {
    const dojoNewRender = renderedDojoNew.find('[name="address"]')
    expect(dojoNewRender.length).toEqual(1)
})
it('displays an input for a dojo city', () => {
    const dojoNewRender = renderedDojoNew.find('[name="city"]')
    expect(dojoNewRender.length).toEqual(1)
})
it('displays an input for a dojo state', () => {
    const dojoNewRender = renderedDojoNew.find('[name="state"]')
    expect(dojoNewRender.length).toEqual(1)
})
it('displays an input for a dojo website', () => {
  const dojoNewRender = renderedDojoNew.find('[name="website"]')
  expect(dojoNewRender.length).toEqual(1)
})
it('displays an input for a dojo phone', () => {
  const dojoNewRender = renderedDojoNew.find('[name="phone"]')
  expect(dojoNewRender.length).toEqual(1)
})
it('displays an input for a dojo email', () => {
  const dojoNewRender = renderedDojoNew.find('[name="email"]')
  expect(dojoNewRender.length).toEqual(1)
})
it('displays an input for a dojo instructor', () => {
  const dojoNewRender = renderedDojoNew.find('[name="instructor"]')
  expect(dojoNewRender.length).toEqual(1)
})
it('displays an input for a dojo image', () => {
  const dojoNewRender = renderedDojoNew.find('[name="image"]')
  expect(dojoNewRender.length).toEqual(1)
})
it('displays an input for a submit Button', () => {
  const dojoNewRender = renderedDojoNew.find('Button')
  expect(dojoNewRender.length).toEqual(1)
})
});
