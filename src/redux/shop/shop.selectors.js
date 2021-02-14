import {createSelector} from "reselect";
import memoize from 'lodash.memoize';


const selectShop = state => state.shop;

export const selectCollections = createSelector(
  [selectShop],
  shop => shop.collections
);


export const selectCollection = memoize(categoryName => createSelector(
  [selectCollections],
  (collections) => collections ? collections[categoryName] : null
));


export const selectCollectionForPreview = createSelector(
  [selectCollections],
  collections => collections ? Object.keys(collections).map(key => collections[key]) : []
);
