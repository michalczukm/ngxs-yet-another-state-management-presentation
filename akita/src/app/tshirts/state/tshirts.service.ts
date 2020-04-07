import { Injectable } from '@angular/core';
import { TshirtsState, TshirtsStore } from './tshirts.store';
import {
  NgEntityService,
  NgEntityServiceConfig,
} from '@datorama/akita-ng-entity-service';
import { TshirtsQuery } from './tshirts.query';

@NgEntityServiceConfig({
  resourceName: 'tshirts',
})
@Injectable({ providedIn: 'root' })
export class TshirtsService extends NgEntityService<TshirtsState> {
  constructor(private tshirtsStore: TshirtsStore, public query: TshirtsQuery) {
    super(tshirtsStore);
  }
}
