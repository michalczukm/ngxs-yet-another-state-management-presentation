import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StickersComponent } from './stickers.component';

@NgModule({
  declarations: [StickersComponent],
  imports: [CommonModule],
  exports: [StickersComponent],
})
export class StickersModule {}
