import React from 'react';
import {Route} from "react-router-dom";
import CategoryPage from "../category/category.component";
import CollectionsOverview from "../../components/collection-overview/collection-overview.component";
import {connect} from 'react-redux';
import {fetchCollectionsStartAsync} from '../../redux/shop/shop.actions';
import WithSpinner from '../../components/with-spinner/with-spinner.component';
import CartItemInfo from '../../components/cart-item-info/cart-item-info.component';
import {createStructuredSelector} from "reselect";
import {selectIsCollectionFetching, selectIsCollectionLoaded} from "../../redux/shop/shop.selectors";

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CategoryPageWithSpinner = WithSpinner(CategoryPage);
const CartItemInfoWithSpinner = WithSpinner(CartItemInfo);


class ShopPage extends React.Component {

  componentDidMount() {
    const {fetchCollectionsStartAsync} = this.props;
    fetchCollectionsStartAsync();
  }

  render() {
    const {match, isCollectionFetching, isCollectionLoading} = this.props;

    return (
      <div className='shop-page'>
        <Route exact path={`${match.path}`}
               render={(props) => (
                 <CollectionsOverviewWithSpinner isLoading={isCollectionFetching} {...props}/>
               )}
        />
        <Route exact path={`${match.path}/:categoryName`}
               render={(props) => (
                 <CategoryPageWithSpinner isLoading={!isCollectionLoading} {...props}/>
               )}
        />
        <Route path={`${match.path}/:categoryName/:itemId`}
               render={(props) => (<CartItemInfoWithSpinner isLoading={!isCollectionLoading} {...props}/>)}
        />
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  isCollectionFetching: selectIsCollectionFetching,
  isCollectionLoading: selectIsCollectionLoaded
});

const mapDispatchToProps = dispatch => ({
  fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync()),
});


export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);
