import React from "react";
import { shallow } from "enzyme";

import { CategoryPage } from "./category.component";
import AllCategoryItems from "../../components/category-overview/all-category-items.component";
import CollectionItem  from '../../components/collection-item/collections-item.component';

describe("CollectionPage", () => {
  let wrapper;
  let mockCategoryData = {
    id: "5OmNJbYmbvBinsw05T9v",
    routeName: "mens",
    title: "Mens",
    items: [
      {
        id: 1,
        imageUrl: "https://i.ibb.co/xJS0T3Y/camo-vest.png",
        name: "Camo Down Vest",
        price: 10,
      },
      {
        id: 2,
        imageUrl: "https://i.ibb.co/xJS0T3Y/camo-vest.png",
        name: "Camo Down Vest",
        price: 20,
      },
      {
        id: 3,
        imageUrl: "https://i.ibb.co/xJS0T3Y/camo-vest.png",
        name: "Camo Down Vest",
        price: 30,
      },
    ],
  };
  beforeEach(() => {
    wrapper = shallow(<CategoryPage categoryData={mockCategoryData} />);
  });

  it("should render the CollectionPage component", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
