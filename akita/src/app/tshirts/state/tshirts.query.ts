import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { TshirtsState, TshirtsStore } from './tshirts.store';

@Injectable({ providedIn: 'root' })
export class TshirtsQuery extends QueryEntity<TshirtsState> {
  constructor(protected store: TshirtsStore) {
    super(store);
  }
}
