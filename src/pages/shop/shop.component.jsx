import React from "react";
import { connect } from "react-redux";
import { Route } from "react-router-dom";
import { fetchCollectionsStartAsync } from "../../redux/shop/shop.actions";
import collectionsOverviewContainer from "../../components/collections-overview/collections-overview.container";
import collectionsPageContainer from "../collection/collectionpage.container";

class ShopPage extends React.Component {
  componentDidMount() {
    this.props.fetchCollectionsStartAsync();
  }

  render() {
    const { match } = this.props;
    return (
      <div className="shop-page">
        <Route
          exact
          path={`${match.path}`}
          component={collectionsOverviewContainer}
        />
        <Route
          path={`${match.path}/:collectionId`}
          component={collectionsPageContainer}
        />
      </div>
    );
  }
}

const mapDispatch = (dispatch) => ({
  fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync()),
});

export default connect(null, mapDispatch)(ShopPage);
