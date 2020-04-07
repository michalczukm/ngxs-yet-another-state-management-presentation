import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Sticker } from '../stickers';
import { Tshirt } from '../tshirts/tshirt.model';
import { Store } from '@ngxs/store';
import { RemoveSticker, RemoveTshirt } from '../common';

export type Cart = {
  stickers: Sticker[];
  tshirts: Tshirt[];
};

@Injectable()
export class CartService {
  constructor(private store: Store) {}

  get(): Observable<Cart> {
    return this.store.select((store) => store.cart);
  }

  removeSticker(sticker: Sticker): void {
    this.store.dispatch(new RemoveSticker(sticker));
  }

  removeTshirt(tshirt: Tshirt): void {
    this.store.dispatch(new RemoveTshirt(tshirt));
  }
}
