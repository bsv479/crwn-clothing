import React, {useEffect} from 'react';
import {Route} from "react-router-dom";
import {connect} from 'react-redux';
import CollectionOverviewContainer from "../../components/collection-overview/collection-overview.container";
import CategoryPageContainer from "../category/category.container";
import CartItemInfoContainer from "../../components/cart-item-info/cart-item-info.container";
import {fetchCollectionsStart} from "../../redux/shop/shop.actions";


const ShopPage = ({fetchCollectionsStart, match}) => {

  useEffect(() => {
    fetchCollectionsStart();
  }, [fetchCollectionsStart]);


  return (
    <div className='shop-page'>
      <Route exact path={`${match.path}`}
             component={CollectionOverviewContainer}
      />
      <Route exact path={`${match.path}/:categoryName`}
             component={CategoryPageContainer}
      />
      <Route path={`${match.path}/:categoryName/:itemId`}
             component={CartItemInfoContainer}
      />
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart()),
});


export default connect(null, mapDispatchToProps)(ShopPage);
