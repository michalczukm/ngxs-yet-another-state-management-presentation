import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Store } from '@ngxs/store';
import { CartState } from './common';

@Component({
  selector: 'smt-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  cartItemsNumber = 0;

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
}
