import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Sticker } from '../stickers';
import { CartService } from './cart.service';
import { Tshirt } from '../tshirts';

@Component({
  selector: 'smt-cart',
  templateUrl: './cart.component.html',
  styles: [
    `
      img {
        width: 100px;
      }
    `,
    `
      :host {
        padding: 10px;
      }
    `,
  ],
})
export class CartComponent implements OnInit {
  stickers$: Observable<Sticker[]>;
  tshirts$: Observable<Tshirt[]>;
  isCartEmpty$: Observable<boolean>;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    const cart$ = this.cartService.get();

    this.stickers$ = cart$.pipe(map((cart) => cart.stickers));
    this.tshirts$ = cart$.pipe(map((cart) => cart.tshirts));
    this.isCartEmpty$ = this.cartService
      .itemsNumber$()
      .pipe(map((value) => value <= 0));
  }

  removeSticker(sticker: Sticker): void {
    this.cartService.removeSticker(sticker);
  }

  removeTshirt(tshirt: Tshirt): void {
    this.cartService.removeTshirt(tshirt);
  }
}
