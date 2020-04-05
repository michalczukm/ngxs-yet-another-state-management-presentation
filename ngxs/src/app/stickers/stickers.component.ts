import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, Select } from '@ngxs/store';
import { Sticker } from './sticker.model';
import { FetchStickers, StickersStateModel } from './store';
import { AddSticker } from '../common';

@Component({
  selector: 'smt-stickers',
  templateUrl: './stickers.component.html',
  styleUrls: ['./stickers.component.css'],
})
export class StickersComponent {
  @Select((state) => state.stickers.stickers) stickers$: Observable<Sticker[]>;

  constructor(private store: Store) {
    // this.stickers$ = this.store.select((state) => state.stickers.stickers);
    this.store.dispatch(new FetchStickers());
  }

  buy(sticker: Sticker) {
    const currentStickers: Sticker[] = this.store.selectSnapshot(
      (state: { stickers: StickersStateModel }) => state.stickers.stickers
    );
    console.log('snapshot: ', currentStickers);

    this.store.dispatch(new AddSticker(sticker));
  }
}
