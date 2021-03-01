import React from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import { createStructuredSelector} from "reselect";

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import CheckoutPage from "./pages/checkout/checkout.component";
import Header from './components/header/header.component';
import SignInAndUpPage from './pages/sign-in-and-up/sign-in-and-up.component';

import {selectCurrentUser} from "./redux/user/user.selectors";
import './App.css';
import Contacts from "./pages/contacts/contacts.component";
import {checkUserSession} from "./redux/user/user.actions";



class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {

    const {checkUserSession} = this.props;
    checkUserSession();

    // this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      // if (userAuth) {
      //   const userRef = await createUserProfileDocument(userAuth);
      //
      //   userRef.onSnapshot(snapShot => {
      //     setCurrentUser({
      //         currentUser: {
      //           id: snapShot.id,
      //           ...snapShot.data()
      //         }
      //       });
      //   })
      // }
      //
      // setCurrentUser(userAuth);
    // })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage}/>
          <Route path='/shop' component={ShopPage}/>
          <Route exact path='/checkout' component={CheckoutPage}/>
          <Route exact path='/contacts' component={Contacts}/>
          <Route exact path='/signin' render={() =>
            this.props.currentUser ? (<Redirect to='/'/>) : <SignInAndUpPage/>} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
