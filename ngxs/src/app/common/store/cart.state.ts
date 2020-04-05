import { State, Action, StateContext, Selector } from '@ngxs/store';
import { Sticker } from '../../stickers';
import { Tshirt } from '../../tshirts';
import {
  AddSticker,
  RemoveSticker,
  AddTshirt,
  RemoveTshirt,
} from './cart.actions';
import { Injectable } from '@angular/core';

export type CartStateModel = {
  stickers: Sticker[];
  tshirts: Tshirt[];
};

@State<CartStateModel>({
  name: 'cart',
  defaults: {
    stickers: [] as Sticker[],
    tshirts: [] as Tshirt[],
  },
})
@Injectable()
export class CartState {
  @Selector()
  static itemsNumber(state: CartStateModel): number {
    return state.stickers.length + state.tshirts.length;
  }

  @Selector()
  static isCartEmpty(state: CartStateModel): boolean {
    return this.itemsNumber(state) <= 0;
  }

  @Action(AddSticker)
  addSticker(
    { patchState, getState }: StateContext<CartStateModel>,
    { payload }: AddSticker
  ): void {
    const state = getState();

    patchState({
      stickers: [...state.stickers, payload],
    });
  }

  @Action(RemoveSticker)
  removeSticker(
    { patchState, getState }: StateContext<CartStateModel>,
    { payload }: RemoveSticker
  ): void {
    const state = getState();

    patchState({
      stickers: state.stickers.filter((sticker) => sticker !== payload),
    });
  }

  @Action(AddTshirt)
  addTshirt(
    { patchState, getState }: StateContext<CartStateModel>,
    { payload }: AddTshirt
  ): void {
    const state = getState();

    patchState({
      tshirts: [...state.tshirts, payload],
    });
  }

  @Action(RemoveTshirt)
  removeTshirt(
    { patchState, getState }: StateContext<CartStateModel>,
    { payload }: RemoveTshirt
  ): void {
    const state = getState();

    patchState({
      tshirts: state.tshirts.filter((tshirt) => tshirt !== payload),
    });
  }
}
