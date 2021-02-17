import React from 'react';
import {Route} from "react-router-dom";
import {connect} from 'react-redux';
import {fetchCollectionsStartAsync} from '../../redux/shop/shop.actions';
import {createStructuredSelector} from "reselect";
import {selectIsCollectionLoaded} from "../../redux/shop/shop.selectors";
import CollectionOverviewContainer from "../../components/collection-overview/collection-overview.container";
import CategoryPageContainer from "../category/category.container";
import CartItemInfoContainer from "../../components/cart-item-info/cart-item-info.container";


class ShopPage extends React.Component {

  componentDidMount() {
    const {fetchCollectionsStartAsync} = this.props;
    fetchCollectionsStartAsync();
  }

  render() {
    const {match} = this.props;

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
  }
}

const mapDispatchToProps = dispatch => ({
  fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync()),
});


export default connect(null, mapDispatchToProps)(ShopPage);
