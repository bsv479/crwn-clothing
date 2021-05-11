import React from 'react';
import CollectionItem from '../collection-item/collections-item.component';
import './collection-preview.styles.scss';
import { withRouter } from "react-router-dom";

export const CollectionPreview = ({ title, routeName, items, match, history }) => {
  return (
    <div className='collection-preview'>
      <div className='title'
        onClick={() => history.push(`${match.path}/${routeName}`)}
      >
        {title.toUpperCase()}
      </div>
      <div className='preview'>
        {items
          .filter((item, idx) => idx < 4)
          .map((item) => (
            <CollectionItem key={item.id} item={item} itemLink={`${match.url}/${routeName}`} />
          ))}
      </div>
    </div>
  )
};


export default withRouter(CollectionPreview);
