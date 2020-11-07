import ShopActionType from "./shop.types";

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
