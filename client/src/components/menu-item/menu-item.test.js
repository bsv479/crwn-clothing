import React from "react";
import { shallow } from "enzyme";

import { MenuItem } from "./menu-item.component";

describe("MenuItem component", () => {
  let wrapper;
  let mockMatch;
  let mockHistory;
  const linkUrl = "/hats";
  const size = "large";
  const imageUrl = "testimage";

  beforeEach(() => {
    mockMatch = {
      url: "/shop",
    };

    mockHistory = {
      push: jest.fn(),
    };

    const mockProps = {
      match: mockMatch,
      history: mockHistory,
      linkUrl,
      size,
      title: "hats",
      imageUrl,
    };
    wrapper = shallow(<MenuItem {...mockProps} />);
  });

  it("should render MenuItem component", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should call history.push with the right string when .menu-item clicked", () => {
    wrapper.find(".menu-item").simulate("click");
    expect(mockHistory.push).toHaveBeenCalledWith(`${mockMatch.url}${linkUrl}`);
  });

  it("should pass size to .menu-item as the prop size", () => {
    expect(wrapper.find(`.${size}`).length).toBe(1);
  });

  it("should pass imageUrl to .background-img as the prop imageUrl", () => {
    expect(wrapper.find(".background-img").get(0).props.style).toHaveProperty(
      "backgroundImage",
      `url(${imageUrl})`
    );
  });
});
