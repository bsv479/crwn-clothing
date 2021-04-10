import React from 'react';
import {selectCollection} from "../../redux/shop/shop.selectors";
import {connect} from "react-redux";
import {Link, withRouter} from 'react-router-dom';
import './cart-item-info.styles.scss';
import CustomButton from "../custom-button/custom-button.component";
import {addItem} from "../../redux/cart/cart.actions";


const CartItemInfo = ({addItem, categoryData, match}) => {
    const itemId = Number(match.params.itemId);
    const itemToShow = categoryData.items.find(item => item.id === itemId);

    return itemToShow ? (
      <div className='item-info'>
        <Link to={`/shop/${categoryData.title.toLowerCase()}`} >
          <h4 style={{marginLeft: '15px'}}>See all {categoryData.title}</h4>
        </Link>
        <div className='item-container'>
          <div className='img-side'>
            <img src={itemToShow.imageUrl}
                 className='item-img' alt={itemToShow.name}/>
          </div>
          <div className='description-side'>
            <div><b>Product name:</b>  {itemToShow.name}</div>
            <div><b>Price:</b>  ${itemToShow.price}</div>
            <div><b>Product Description:</b></div>
            <div>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Etiam placerat vestibulum massa, et malesuada quam maximus sed.
              Nulla vitae lectus quis odio bibendum convallis sed et leo.
              Sed posuere sed ligula eget porttitor. Duis tincidunt rutrum dolor,
              non varius nulla suscipit sit amet. Morbi eget vulputate mauris.
            </div>
            <CustomButton onClick={() => addItem(itemToShow)} inverted>
              Add to cart
            </CustomButton>
          </div>

        </div>

      </div>
    ) : (<h3 style={{textAlign: "center"}}>Item not found.</h3>)
};

const mapStateToProps = (state, ownProps) => ({
  categoryData: selectCollection(ownProps.match.params.categoryName)(state)
});

const mapDispatchToProps = (dispatch) => ({
  addItem: item => dispatch(addItem(item))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CartItemInfo));

