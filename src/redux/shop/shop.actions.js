import ShopActionType from "./shop.types";
import { firestore, getCollectionData } from "../../firebase/firebase.utils";

export const fetchCollectionsStart = () => ({
  type: ShopActionType.FETCH_COLLECTION_START,
});

export const fetchCollectionsSuccess = (collections) => ({
  type: ShopActionType.FETCH_COLLECTION_SUCCESS,
  payload: collections,
});

export const fetchCollectionsFailure = (errorMessage) => ({
  type: ShopActionType.FETCH_COLLECTION_FAILURE,
  payload: errorMessage,
});

export const fetchCollectionsStartAsync = () => {
  return (dispatch) => {
    const collectionRef = firestore.collection("collections");
    dispatch(fetchCollectionsStart());
    collectionRef
      .get()
      .then((snapshot) => {
        const collections = getCollectionData(snapshot);
        dispatch(fetchCollectionsSuccess(collections));
      })
      .catch((error) => {
        dispatch(fetchCollectionsFailure(error.message));
      });
  };
};
