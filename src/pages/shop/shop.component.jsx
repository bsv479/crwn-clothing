import React from 'react';
import { Route } from "react-router-dom";
import CategoryPage from "../category/category.component";
import CollectionsOverview from "../../components/collection-overview/collection-overview.component";
import { firestore, convertCollectionsSnapshotToMap } from "../../firebase/firebase.util";
import { connect } from 'react-redux';
import { updateCollections } from '../../redux/shop/shop.actions';
import WithSpinner from '../../components/with-spinner/with-spinner.component';
import CartItemInfo from '../../components/cart-item-info/cart-item-info.component';

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CategoryPageWithSpinner = WithSpinner(CategoryPage);


class ShopPage extends React.Component {
  state = {
    loading: true
  }

  unsubscribeFromSnapshot = null;

  componentDidMount() {
    const {updateCollections} = this.props;
    const collectionRef = firestore.collection('collections');

    collectionRef.get().then(async (snapshot) => {
      const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
      updateCollections(collectionsMap);
      this.setState({loading: false});
    });
  }

  render() {
    const { match } = this.props;
    const {loading} = this.state;
    console.log(this.props);

    return (
      <div className='shop-page'>
        <Route exact path={`${match.path}`} 
                render={(props) => (
                  <CollectionsOverviewWithSpinner isLoading={loading} {...props}/>
                )} 
        />
        <Route exact path={`${match.path}/:categoryName`} 
                render={(props) => (
                  <CategoryPageWithSpinner isLoading={loading} {...props}/>
                )} 
        />
        <Route path={`${match.path}/:categoryName/:itemId`}
          render={() => (<CartItemInfo/>)}
        />
      </div>
    );
  }
};

const mapDispatchToProps = dispatch => ({
  updateCollections: collectionsMap =>
    dispatch(updateCollections(collectionsMap))
});


export default connect(null, mapDispatchToProps)(ShopPage) ;
