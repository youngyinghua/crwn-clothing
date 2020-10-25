import { ShopActionType } from "./shop.types";
export const getCollections = (collections) => ({
  type: ShopActionType.GET_COLLECTIONS_DATA,
  payload: collections,
});
