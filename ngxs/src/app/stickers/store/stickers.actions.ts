import { Sticker } from '../sticker.model';

export class FetchStickers {
  static readonly type = '[stickers] fetch stickers';
}

export class LoadStickers {
  static readonly type = '[stickers] load stickers';

  constructor(public payload: Sticker[]) { }
}

export type StickersActions = FetchStickers | LoadStickers;
