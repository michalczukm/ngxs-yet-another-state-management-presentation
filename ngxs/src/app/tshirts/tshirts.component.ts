import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngxs/store';
import { AddTshirt } from '../common';
import { TshirtsService } from './tshirts.service';
import { Tshirt } from './tshirt.model';

@Component({
  selector: 'smt-tshirts',
  templateUrl: './tshirts.component.html',
  styleUrls: ['./tshirts.component.css'],
})
export class TshirtsComponent implements OnInit {
  tshirts$: Observable<Tshirt[]>;

  constructor(private tshirtsService: TshirtsService, private store: Store) {}

  ngOnInit() {
    this.tshirts$ = this.tshirtsService.GetAll();
  }

  buy(tshirt: Tshirt) {
    this.store.dispatch(new AddTshirt(tshirt));
  }
}
