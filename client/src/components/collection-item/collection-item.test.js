import React from "react";
import {CollectionItem} from "./collections-item.component";
import { shallow } from "enzyme";

describe("CollectionItem component", () => {
  let wrapper;
  let mockAddItem;
  const imageUrl = "www.testImage.com";
  const mockName = "black hat";
  const mockPrice = 10;
  const itemLink = "shop/black-hats/";

  beforeEach(() => {
    mockAddItem = jest.fn();

    const mockProps = {
      item: {
        imageUrl: imageUrl,
        price: mockPrice,
        name: mockName,
      },
      addItem: mockAddItem,
      itemLink,
    };

    wrapper = shallow(<CollectionItem {...mockProps} />);
  });

  it("should render CollectionItem component", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should call addItem when CustomButton clicked", () => {
    wrapper.find("CustomButton").simulate("click");
    expect(mockAddItem).toHaveBeenCalled();
  });

  it("should render name prop in .name", () => {
    expect(wrapper.find(".name").text()).toBe(mockName);
  });

  it("should render price prop in .price", () => {
    const price = parseInt(wrapper.find(".price").text());
    expect(price).toBe(mockPrice);
  });
});
