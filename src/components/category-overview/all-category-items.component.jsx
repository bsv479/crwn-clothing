
import React from "react";
import CollectionItem from "../collection-item/collections-item.component";
import { withRouter } from 'react-router-dom';

import "./all-category-items.styles.scss";


const AllCategoryItems = ({ categoryItems, match }) => {
  return (
    <div className='all-category'>
      {
        categoryItems.map(item => {
          return (
            <CollectionItem key={item.id}
              item={item}
              itemLink={`${match.url}`}
            />
          )
        })
      }
    </div>
  )
};

export default withRouter(AllCategoryItems);
