import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Store } from '@ngxs/store';
import {CartState, CartStateModel} from './common';

@Component({
  selector: 'smt-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  cartItemsNumber = 0;
  currentCartState: CartStateModel;

  private subscriptions = [] as Subscription[];

  constructor(private store: Store) {
  }

  ngOnInit(): void {
    this.subscriptions.push(
      this.store.select(CartState.itemsNumber)
        .subscribe(length => this.cartItemsNumber = length)
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }

  getFreshSnapshot() {
    this.currentCartState = this.store.selectSnapshot(CartState);
  }
}
