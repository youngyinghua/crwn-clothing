import React from "react";
import { connect } from "react-redux";
import CollectionPreview from "../../components/collection-preview/collection-preview.component";
import { selectCollections } from "../../redux/shop/shop.selectors";

import "./collections-overview.styles.scss";

const CollectionsOverview = ({ collections }) => (
  <div className="shop-page">
    {collections.map(({ id, ...OtherCollectionProps }) => (
      <CollectionPreview key={id} {...OtherCollectionProps} />
    ))}
  </div>
);

const mapState = (state) => ({
  collections: selectCollections(state),
});

export default connect(mapState)(CollectionsOverview);
