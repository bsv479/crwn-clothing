import { shallow } from "enzyme";
import React from "react";
import CartItem from "./cart-item.component";

it("Should render CartItem component", () => {
  const mockItem = {
    imageUrl: "www.test-img-url.com",
    price: 10,
    name: "hats",
    quantity: 2,
  };

  expect(shallow(<CartItem item={mockItem} />)).toMatchSnapshot();
});
