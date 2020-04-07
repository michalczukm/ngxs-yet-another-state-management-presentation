import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { StickersStore, StickersState } from './stickers.store';

@Injectable({ providedIn: 'root' })
export class StickersQuery extends QueryEntity<StickersState> {
  constructor(protected store: StickersStore) {
    super(store);
  }
}
