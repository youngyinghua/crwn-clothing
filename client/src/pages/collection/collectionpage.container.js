import { connect } from "react-redux";
import { compose } from "redux";
import WithSpinner from "../../components/with-spinner/with-spinner.component";
import { selectIsCollectionsFetching } from "../../redux/shop/shop.selectors";
import CollectionPage from "./collection.component";

const mapState = (state) => ({
  isLoading: selectIsCollectionsFetching(state),
});

const collectionsPageContainer = compose(
  connect(mapState),
  WithSpinner
)(CollectionPage);

export default collectionsPageContainer;
