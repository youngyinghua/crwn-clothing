import { createSelector } from "reselect";

const selectShop = (state) => state.shop;

export const selectCollections = createSelector(
  [selectShop],
  (shop) => shop.collections
);

export const selectCollection = (collectionId) =>
  createSelector([selectCollections], (collections) =>
    collections.filter((collection) => collection.routeName === collectionId)
  );
