import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { Tshirt } from '../tshirt.model';

export interface TshirtsState extends EntityState<Tshirt> {}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'tshirts' })
export class TshirtsStore extends EntityStore<TshirtsState> {
  constructor() {
    super();
  }
}
