import { Injectable } from '@angular/core';
import { Query } from '@datorama/akita';
import { CartStore, CartStateModel } from './cart.store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class CartQuery extends Query<CartStateModel> {
  cart$: Observable<CartStateModel> = this.select((store) => store);

  itemsNumber$: Observable<number> = this.select(
    (store) => store.stickers.length + store.tshirts.length
  );

  isCartEmpty$: Observable<boolean> = this.itemsNumber$.pipe(
    map((value) => value <= 0)
  );

  constructor(protected store: CartStore) {
    super(store);
  }
}
