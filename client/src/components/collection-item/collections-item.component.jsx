import React from 'react';
import { connect } from 'react-redux';
import CustomButton from "../custom-button/custom-button.component";
import { addItem } from "../../redux/cart/cart.actions";
import { Link, withRouter } from "react-router-dom";
import './collection-item.styles.scss';


const CollectionItem = ({ item, addItem, itemLink, ...otherProps }) => {
  const { imageUrl, name, price } = item;

  return (
    <div className='collection-item'>
      <Link to={`${itemLink}/${item.id}`} 
        className='image'
        style={{
          backgroundImage: `url(${imageUrl})`
        }}>
      </Link>


      <div className='collection-footer'>
        <span className='name'>{name}</span>
        <span className='price'>${price}</span>
      </div>
      <CustomButton onClick={() => addItem(item)} inverted>
        Add to cart
      </CustomButton>
    </div>
  )
};

const mapDispatchToProps = (dispatch) => ({
  addItem: item => dispatch(addItem(item))
});


export default withRouter(connect(null, mapDispatchToProps)(CollectionItem));
