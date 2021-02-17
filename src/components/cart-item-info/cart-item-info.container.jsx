import {compose} from "redux";
import {createStructuredSelector} from "reselect";
import {selectIsCollectionLoaded} from "../../redux/shop/shop.selectors";
import {connect} from "react-redux";
import WithSpinner from "../with-spinner/with-spinner.component";
import CartItemInfo from './cart-item-info.component';


const mapStateToProps = createStructuredSelector({
  isLoading: (state) => !selectIsCollectionLoaded(state)
});

const CartItemInfoContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(CartItemInfo);


export default CartItemInfoContainer;
