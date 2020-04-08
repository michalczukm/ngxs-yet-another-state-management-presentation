import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { Sticker } from '../stickers';
import { CartService } from './cart.service';
import { Tshirt } from '../tshirts';
import { RootStore, CartQueries } from '../common';

@Component({
  selector: 'smt-cart',
  templateUrl: './cart.component.html',
  styles: [
    `
      img {
        width: 100px;
      }
    `,
  ],
})
export class CartComponent {
  stickers$: Observable<Sticker[]> = this.store.select(CartQueries.stickers);

  tshirts$: Observable<Tshirt[]> = this.store.select(CartQueries.tshirts);

  isCartEmpty$: Observable<boolean> = this.store.select(
    CartQueries.isCartEmpty
  );

  constructor(
    private cartService: CartService,
    private store: Store<RootStore>
  ) {}

  removeSticker(sticker: Sticker): void {
    this.cartService.removeSticker(sticker);
  }

  removeTshirt(tshirt: Tshirt): void {
    this.cartService.removeTshirt(tshirt);
  }
}
