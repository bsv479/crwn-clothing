import React from 'react';
import {Route} from "react-router-dom";
import CategoryPage from "../category/category.component";
import CollectionsOverview from "../../components/collection-overview/collection-overview.component";


const ShopPage = ({match}) => {
  return (
    <div className='shop-page'>
      <Route exact path={`${match.path}`} component={CollectionsOverview}/>
      <Route path={`${match.path}/:categoryName`} component={CategoryPage}/>
    </div>
  );
};


export default ShopPage;