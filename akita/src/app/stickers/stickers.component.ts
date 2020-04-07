import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Sticker } from './sticker.model';
import { CartService } from '../common/state';
import { StickersService } from './state';

@Component({
  selector: 'smt-stickers',
  templateUrl: './stickers.component.html',
  styleUrls: ['./stickers.component.css'],
})
export class StickersComponent {
  stickers$: Observable<Sticker[]> = this.stickersService.get();

  constructor(
    private stickersService: StickersService,
    private cartService: CartService
  ) {}

  buy(sticker: Sticker): void {
    this.cartService.addSticker(sticker);
  }
}
