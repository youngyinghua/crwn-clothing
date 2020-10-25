import { connect } from "react-redux";
import { compose } from "redux";
import { selectIsCollectionsFetching } from "../../redux/shop/shop.selectors";
import WithSpinner from "../with-spinner/with-spinner.component";
import CollectionsOverview from "./collections-overview.component";

const mapState = (state) => ({
  isLoading: selectIsCollectionsFetching(state),
});

const collectionsOverviewContainer = compose(
  connect(mapState),
  WithSpinner
)(CollectionsOverview);

export default collectionsOverviewContainer;
