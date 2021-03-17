import React from 'react';
import {createStructuredSelector} from "reselect";
import {selectCollectionForPreview} from "../../redux/shop/shop.selectors";
import CollectionPreview from "../collection-preview/collection-preview.component";
import {connect} from "react-redux";
import "./collection-overview.styles.scss"

const CollectionsOverview = ({collections}) => {
  return (
    <div className='collection-overview'>
      {
        collections.map(({id, ...otherProps}) => {
          return <CollectionPreview key={id} {...otherProps}/>
        })
      }
    </div>
  )
};

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionForPreview
});

export default connect(mapStateToProps)(CollectionsOverview);