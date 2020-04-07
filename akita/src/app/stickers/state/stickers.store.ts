import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { Sticker } from '../sticker.model';

export interface StickersState extends EntityState<Sticker> {}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'stickers' })
export class StickersStore extends EntityStore<StickersState> {
  constructor() {
    super();
  }
}
