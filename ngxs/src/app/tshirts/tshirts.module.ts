import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TshirtsService } from './tshirts.service';
import { TshirtsComponent } from './tshirts.component';

@NgModule({
  declarations: [TshirtsComponent],
  imports: [CommonModule],
  exports: [TshirtsComponent],
  providers: [TshirtsService],
})
export class TshirtsModule {
}
