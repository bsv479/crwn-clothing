import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import './header.styles.scss';
import {ReactComponent as Logo} from '../../assets/crown.svg';
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import {createStructuredSelector} from "reselect";
import {selectCartHidden} from "../../redux/cart/cart.selectors";
import {selectCurrentUser} from "../../redux/user/user.selectors";
import {signOutStart} from "../../redux/user/user.actions";


const Header = ({currentUser, hidden, signOutStart}) => (
  <div className='header'>
    <Link className='logo-container' to='/'>
      <Logo className='logo'/>
    </Link>
    <div className='options'>
      <Link to='/shop' className='option'>SHOP</Link>
      <Link to='/contacts' className='option'>CONTACTS</Link>

      {
        currentUser ? (
          <div className='option' onClick={signOutStart}>
            SIGN OUT
          </div>
        ) : (
          <Link to='/signin' className='option'>SIGN IN</Link>
        )
      }
      <CartIcon/>
    </div>
    {
      hidden ? null : <CartDropdown/>
    }
  </div>
);

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
});

const mapDispatchToProps = dispatch => ({
  signOutStart: () => dispatch(signOutStart())
});


export default connect(mapStateToProps, mapDispatchToProps)(Header);
