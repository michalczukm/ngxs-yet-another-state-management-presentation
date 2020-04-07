import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import produce from 'immer';
import { Sticker } from '../stickers';
import { Tshirt } from '../tshirts';
import { map } from 'rxjs/operators';

export type Cart = {
  stickers: Sticker[];
  tshirts: Tshirt[];
};

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cartData$: BehaviorSubject<Cart> = new BehaviorSubject<Cart>({
    stickers: [],
    tshirts: [],
  });

  get(): Observable<Cart> {
    return this.cartData$.asObservable();
  }

  itemsNumber$(): Observable<number> {
    return this.cartData$
      .asObservable()
      .pipe(map((value) => value.stickers.length + value.tshirts.length));
  }

  addSticket(sticker: Sticker): void {
    this.cartData$.next(
      produce(this.cartData$.value, (draft) => {
        draft.stickers.push(sticker);
      })
    );
  }

  removeSticker(sticker: Sticker): void {
    this.cartData$.next(
      produce(this.cartData$.value, (draft) => {
        draft.stickers = draft.stickers.filter(
          (item) => item.name !== sticker.name
        );
      })
    );
  }

  addTshirt(tshirt: Tshirt): void {
    this.cartData$.next(
      produce(this.cartData$.value, (draft) => {
        draft.tshirts.push(tshirt);
      })
    );
  }

  removeTshirt(tshirt: Tshirt): void {
    this.cartData$.next(
      produce(this.cartData$.value, (draft) => {
        draft.tshirts = draft.tshirts.filter(
          (item) => item.name !== tshirt.name
        );
      })
    );
  }
}
