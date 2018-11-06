import { Sticker } from '../../stickers';
import { Tshirt } from '../../tshirts';

export class AddSticker {
  static readonly type = '[cart] add sticker';
  constructor(public payload: Sticker) {}
}

export class RemoveSticker {
  static readonly type = '[cart] remove sticker'
  constructor(public payload: Sticker) {}
}

export class AddTshirt {
  static readonly type = '[cart] add tshirt';
  constructor(public payload: Tshirt) {}
}

export class RemoveTshirt {
  static readonly type = '[cart] remove tshirt';
  constructor(public payload: Tshirt) {}
}


type CartActions = AddSticker | RemoveSticker |
                   AddTshirt | RemoveTshirt;
