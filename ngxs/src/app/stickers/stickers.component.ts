import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, Select } from '@ngxs/store';
import { StickersService } from './stickers.service';
import { Sticker } from './sticker.model';
import { CartService } from '../cart/cart.service';
import { FetchStickers, StickersState } from './store';
import { AddSticker } from '../common';

@Component({
  selector: 'smt-stickers',
  templateUrl: './stickers.component.html',
  styleUrls: ['./stickers.component.css']
})
export class StickersComponent {
  @Select(state => state.stickers.stickers) stickers$: Observable<Sticker[]>;

  constructor(private store: Store) {
    // this.stickers$ = this.store.select((state) => state.stickers.stickers);
    this.store.dispatch(new FetchStickers());
  }

  buy(sticker: Sticker) {
    this.store.dispatch(new AddSticker(sticker));
  }
}
