import {compose} from 'redux';
import {createStructuredSelector} from "reselect";
import {selectIsCollectionFetching} from "../../redux/shop/shop.selectors";
import {connect} from "react-redux";
import WithSpinner from "../../hoc/with-spinner/with-spinner.component";
import CollectionsOverview from './collection-overview.component';


const mapStateToProps = createStructuredSelector({
  isLoading: selectIsCollectionFetching
});


const CollectionOverviewContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(CollectionsOverview);

export default CollectionOverviewContainer;
