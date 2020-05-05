import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector} from 'reselect';
import CollectionPreview from '../collection-preview/collection-preview.component';

import {selectCollections} from '../../redux/shop/shop.selector';

import './collections-overview.style.scss';



const CollectionsOverView = ({ collections }) => (
    <div className="collection-overview">
    {collections.map(({ id, ...otherCollectionsProps }) => (
    <CollectionPreview key={id} {...otherCollectionsProps} />
        ))}
</div>
)



const mapStateToProps = createStructuredSelector({
    collections: selectCollections
})

export default connect(mapStateToProps)(CollectionsOverView);

