import { cart, CartStore } from './cart.reducer';
import {
  ActionReducerMap,
  createSelector,
  createFeatureSelector,
} from '@ngrx/store';
import { stickers, StickersStore } from './stickers.reducer';

export type RootStore = {
  cart: CartStore;
  stickers: StickersStore;
};

export const reducers: ActionReducerMap<RootStore> = {
  cart,
  stickers,
};

export * from './cart.reducer';
export * from './stickers.reducer';

// queries/selectors ==========
const itemsNumberQuery = (cartStore: CartStore) =>
  cartStore.stickers.length + cartStore.tshirts.length;

export const selectCart = createFeatureSelector<CartStore>('cart');

export const CartQueries = {
  itemsNumber: createSelector(selectCart, (state) => itemsNumberQuery(state)),
  isCartEmpty: createSelector(
    selectCart,
    (state) => state.stickers.length + state.tshirts.length <= 0
  ),
  stickers: createSelector(selectCart, (state) => state.stickers),
  tshirts: createSelector(selectCart, (state) => state.tshirts),
};
