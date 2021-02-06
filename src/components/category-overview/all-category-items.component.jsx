import React from "react";
import CollectionItem from "../collection-item/collections-item.component";

import "./all-category-items.styles.scss";


const AllCategoryItems = ({categoryItems}) => {
  return (
    <div className='all-category'>
      {
        categoryItems.map(item => <CollectionItem key={item.id} item={item}/>)
      }
    </div>
  )
};

export default AllCategoryItems;