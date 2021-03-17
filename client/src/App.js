import React, {useEffect} from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';
import {connect} from 'react-redux';
import {createStructuredSelector} from "reselect";

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import CheckoutPage from "./pages/checkout/checkout.component";
import Header from './components/header/header.component';
import SignInAndUpPage from './pages/sign-in-and-up/sign-in-and-up.component';

import {selectCurrentUser} from "./redux/user/user.selectors";
import './App.css';
import Contacts from "./pages/contacts/contacts.component";
import {checkUserSession} from "./redux/user/user.actions";


const App = ({currentUser, checkUserSession}) => {

  useEffect(() => {
    checkUserSession();
  }, [checkUserSession]);


  return (
    <div>
      <Header/>
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route path='/shop' component={ShopPage}/>
        <Route exact path='/checkout' component={CheckoutPage}/>
        <Route exact path='/contacts' component={Contacts}/>
        <Route exact path='/signin' render={() =>
          currentUser ? (<Redirect to='/'/>) : <SignInAndUpPage/>}/>
      </Switch>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
