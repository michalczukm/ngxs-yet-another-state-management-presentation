import { Action, createAction, createReducer, on, props } from '@ngrx/store';
import { Sticker } from '../stickers';
import { Tshirt } from '../tshirts';

const initialState: CartStore = {
  stickers: [],
  tshirts: [],
};

export type CartStore = {
  stickers: Sticker[];
  tshirts: Tshirt[];
};

export class StickerAddAction implements Action {
  type: string = 'STICKER_ADD';
  constructor(public payload: Sticker) {}
}

export class StickerRemoveAction implements Action {
  type: string = 'STICKER_REMOVE';
  constructor(public payload: Sticker) {}
}

// export const StickerRemoveAction = createAction(
//   'STICKER_REMOVE',
//   props<{ payload: Sticker }>()
// );

export class TshirtAddAction implements Action {
  type: string = 'TSHIRT_ADD';
  constructor(public payload: Tshirt) {}
}

export class TshirtRemoveAction implements Action {
  type: string = 'TSHIRT_REMOVE';
  constructor(public payload: Tshirt) {}
}

type CartActions =
  | StickerAddAction
  | StickerRemoveAction
  | TshirtAddAction
  | TshirtRemoveAction;

export const cart = (state = initialState, action: CartActions): CartStore => {
  switch (action.type as string) {
    case 'STICKER_ADD':
      return {
        ...state,
        stickers: [...state.stickers, Object.assign({}, action.payload)],
      };
    case 'STICKER_REMOVE':
      return {
        ...state,
        stickers: state.stickers.filter((s) => s !== action.payload),
      };
    case 'TSHIRT_ADD':
      return {
        ...state,
        tshirts: [...state.tshirts, Object.assign({}, action.payload)],
      };
    case 'TSHIRT_REMOVE':
      return {
        ...state,
        tshirts: state.tshirts.filter((s) => s !== action.payload),
      };
    default:
      return state;
  }
};
