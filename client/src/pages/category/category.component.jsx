import React from "react";

import "./category.styles.scss";
import AllCategoryItems from "../../components/category-overview/all-category-items.component";
import { selectCollection } from "../../redux/shop/shop.selectors";
import { connect } from "react-redux";


export const CategoryPage = ({ categoryData }) => {
  return (
    <div className="category-page">
      <h1>{categoryData.title.toUpperCase()}</h1>
      <AllCategoryItems categoryItems={categoryData.items} />
    </div>
  );
};


const mapStateToProps = (state, ownProps) => ({
  categoryData: selectCollection(ownProps.match.params.categoryName)(state)
});


export default connect(mapStateToProps)(CategoryPage);
