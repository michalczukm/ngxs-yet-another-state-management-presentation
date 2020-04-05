import { Sticker } from '../sticker.model';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { State, StateContext, Action } from '@ngxs/store';
import { FetchStickers, LoadStickers } from './stickers.actions';
import { StickersService } from '../stickers.service';
import { Injectable } from '@angular/core';

export type StickersStateModel = {
  stickers: Sticker[];
};

@State<StickersStateModel>({
  name: 'stickers',
  defaults: {
    stickers: [],
  },
})
@Injectable()
export class StickersState {
  constructor(private stickersService: StickersService) {}

  @Action(FetchStickers)
  fetchStickers({
    dispatch,
  }: StateContext<StickersStateModel>): Observable<Sticker[]> {
    return this.stickersService.getAll().pipe(
      tap((stickers) => {
        dispatch(new LoadStickers(stickers));
      })
    );
  }

  @Action(LoadStickers)
  LoadStickers(
    { patchState }: StateContext<StickersStateModel>,
    { payload }: LoadStickers
  ): void {
    patchState({
      stickers: payload,
    });
  }
}
