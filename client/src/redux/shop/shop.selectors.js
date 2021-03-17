import {createSelector} from "reselect";
import memoize from 'lodash.memoize';


const selectShop = state => state.shop;

export const selectCollections = createSelector(
  [selectShop],
  shop => shop.collections
);


export const selectCollection = memoize(categoryName => createSelector(
  [selectCollections],
  collection => collection ? collection[categoryName] : null
));


export const selectCollectionForPreview = createSelector(
  [selectCollections],
  collections => collections ? Object.keys(collections).map(key => collections[key]) : []
);

export const selectIsCollectionFetching = createSelector(
  [selectShop],
  shop => shop.isFetching
);

export const selectIsCollectionLoaded = createSelector(
  [selectCollections],
  collections => !!collections
);


// export const selectItem = itemId => createSelector(
//     [selectCollection],
//     collection => collection ?
//       collection.find((item) => item.id === itemId) : []
// );
