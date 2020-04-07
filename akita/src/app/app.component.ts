import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { CartService } from './common/state';
import { Cart } from './cart/cart.service';

@Component({
  selector: 'smt-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, OnDestroy {
  cartItemsNumber: number = 0;

  currentCartState: Cart;

  private subscriptions: Subscription[] = [];

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.subscriptions.push(
      this.cartService.query.itemsNumber$.subscribe(
        (length) => (this.cartItemsNumber = length)
      )
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((sub) => sub.unsubscribe());
  }

  getFreshSnapshot(): void {
    this.currentCartState = this.cartService.query.getValue();
  }
}
