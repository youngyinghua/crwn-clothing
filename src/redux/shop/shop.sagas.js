import { takeLatest, call, put } from "redux-saga/effects";
import { firestore, getCollectionData } from "../../firebase/firebase.utils";
import {
  fetchCollectionsFailure,
  fetchCollectionsSuccess,
} from "./shop.actions";
import ShopActionTypes from "./shop.types";

export function* fetchCollectionsAsync() {
  try {
    const collectionRef = firestore.collection("collections");
    const snapshot = yield collectionRef.get();
    const collections = yield call(getCollectionData, snapshot);
    yield put(fetchCollectionsSuccess(collections));
  } catch (error) {
    yield put(fetchCollectionsFailure(error));
  }
}

export function* fetchCollectionsStart() {
  yield takeLatest(
    ShopActionTypes.FETCH_COLLECTION_START,
    fetchCollectionsAsync
  );
}
