import React from "react";
import CollectionPreview from "../../components/collection-preview/collection-preview.component";
import SHOP_DATA from "./shop_data";

class ShopPage extends React.Component {
  constructor() {
    super();
    this.state = { collections: SHOP_DATA };
  }
  render() {
    const { collections } = this.state;
    console.log(collections);
    return (
      <div className="shop-page">
        {collections.map(({ id, ...OtherCollectionProps }) => (
          <CollectionPreview key={id} {...OtherCollectionProps} />
        ))}
      </div>
    );
  }
}

export default ShopPage;
