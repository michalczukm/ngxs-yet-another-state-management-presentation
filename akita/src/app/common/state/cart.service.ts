import { Injectable } from '@angular/core';
import { CartStore } from './cart.store';
import { Sticker } from '../../stickers';
import { Tshirt } from '../../tshirts';
import { CartQuery } from './cart.query';

@Injectable({ providedIn: 'root' })
export class CartService {
  constructor(private cartStore: CartStore, public query: CartQuery) {}

  addSticker(sticker: Sticker): void {
    this.cartStore.update((state) => ({
      stickers: [...state.stickers, sticker],
    }));
  }

  removeSticker(sticker: Sticker): void {
    this.cartStore.update((state) => ({
      stickers: state.stickers.filter((value) => value.name !== sticker.name),
    }));
  }

  addTshirt(tshirt: Tshirt): void {
    this.cartStore.update((state) => ({
      tshirts: [...state.tshirts, tshirt],
    }));
  }

  removeTshirt(tshirt: Tshirt): void {
    this.cartStore.update((state) => ({
      tshirts: state.tshirts.filter((value) => value.name !== tshirt.name),
    }));
  }
}
