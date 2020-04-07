import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Tshirt } from './tshirt.model';
import { CartService } from '../common/state';
import { TshirtsService } from './state';

@Component({
  selector: 'smt-tshirts',
  templateUrl: './tshirts.component.html',
  styleUrls: ['./tshirts.component.css'],
})
export class TshirtsComponent implements OnInit {
  tshirts$: Observable<Tshirt[]>;

  constructor(
    private tshirtsService: TshirtsService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.tshirts$ = this.tshirtsService.get();
  }

  buy(tshirt: Tshirt): void {
    this.cartService.addTshirt(tshirt);
  }
}
