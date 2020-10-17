import React from "react";
import { connect } from "react-redux";
import CollectionItem from "../../components/collection-item/collection-item.component";
import { selectCollection } from "../../redux/shop/shop.selectors";
import "./collection.styles.scss";

const CollectionPage = ({ match, collection }) => (
  <div className="collection">
    <h2 className="collection-title"> {match.params.collectionId}</h2>
    <div className="collection-items">
      {collection[0].items.map((item) => (
        <CollectionItem key={item.id} item={item} />
      ))}
    </div>
  </div>
);

const mapState = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state),
});

export default connect(mapState)(CollectionPage);
