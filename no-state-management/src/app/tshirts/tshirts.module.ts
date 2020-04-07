import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TshirtsComponent } from './tshirts.component';

@NgModule({
  declarations: [TshirtsComponent],
  imports: [CommonModule],
  exports: [TshirtsComponent],
})
export class TshirtsModule {}
