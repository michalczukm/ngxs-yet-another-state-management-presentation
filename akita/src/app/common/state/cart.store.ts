import { Injectable } from '@angular/core';
import { Store, StoreConfig } from '@datorama/akita';
import { Sticker } from '../../stickers';
import { Tshirt } from '../../tshirts';

export type CartStateModel = {
  stickers: Sticker[];
  tshirts: Tshirt[];
};

export function createInitialState(): CartStateModel {
  return {
    stickers: [],
    tshirts: [],
  };
}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'cart' })
export class CartStore extends Store<CartStateModel> {
  constructor() {
    super(createInitialState());
  }
}
