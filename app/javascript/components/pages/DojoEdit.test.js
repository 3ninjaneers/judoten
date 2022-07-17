import React from "react";

import Enzyme, { shallow } from "enzyme";

import Adapter from "enzyme-adapter-react-16";

import DojoEdit from "./DojoEdit";

Enzyme.configure({ adapter: new Adapter() });

describe("When DojoIndex renders", () => {
  let renderedDojoEdit;
  beforeEach(() => {
    renderedDojoEdit = shallow(<DojoEdit />);
  });
  it("displays a form to edit a dojo", () => {
    const dojoEditRender = renderedDojoEdit.find("Form");
    expect(dojoEditRender.length).toEqual(1);
  });
  it("displays an input for a dojo name", () => {
    const dojoEditRender = renderedDojoEdit.find('[name="name"]');
    expect(dojoEditRender.length).toEqual(1);
  });
  it("displays an input for a dojo address", () => {
    const dojoEditRender = renderedDojoEdit.find('[name="address"]');
    expect(dojoEditRender.length).toEqual(1);
  });
  it("displays an input for a dojo city", () => {
    const dojoEditRender = renderedDojoEdit.find('[name="city"]');
    expect(dojoEditRender.length).toEqual(1);
  });
  it("displays an input for a dojo state", () => {
    const dojoEditRender = renderedDojoEdit.find('[name="state"]');
    expect(dojoEditRender.length).toEqual(1);
  });
  it("displays an input for a dojo website", () => {
    const dojoEditRender = renderedDojoEdit.find('[name="website"]');
    expect(dojoEditRender.length).toEqual(1);
  });
  it("displays an input for a dojo phone", () => {
    const dojoEditRender = renderedDojoEdit.find('[name="phone"]');
    expect(dojoEditRender.length).toEqual(1);
  });
  it("displays an input for a dojo email", () => {
    const dojoEditRender = renderedDojoEdit.find('[name="email"]');
    expect(dojoEditRender.length).toEqual(1);
  });
  it("displays an input for a dojo instructor", () => {
    const dojoEditRender = renderedDojoEdit.find('[name="instructor"]');
    expect(dojoEditRender.length).toEqual(1);
  });
  it("displays an input for a dojo image", () => {
    const dojoEditRender = renderedDojoEdit.find('[name="image"]');
    expect(dojoEditRender.length).toEqual(1);
  });
  it("displays an input for a submit Button", () => {
    const dojoEditRender = renderedDojoEdit.find("Button");
    expect(dojoEditRender.length).toEqual(1);
  });
});
