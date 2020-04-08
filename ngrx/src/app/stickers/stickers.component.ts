import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { Sticker } from './sticker.model';
import { RootStore } from '../common';
import { StickerAddAction } from '../common';
import { FetchStickersAction } from '../common';

@Component({
  selector: 'smt-stickers',
  templateUrl: './stickers.component.html',
  styleUrls: ['./stickers.component.css'],
})
export class StickersComponent {
  stickers$: Observable<Sticker[]>;

  constructor(private store: Store<RootStore>) {
    this.stickers$ = this.store.select(state => state.stickers.stickers);

    this.store.dispatch(new FetchStickersAction());
  }

  buy(sticker: Sticker): void {
    this.store.dispatch(new StickerAddAction(sticker));
  }
}
