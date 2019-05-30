import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxsModule } from '@ngxs/store';
import { StickersService } from './stickers.service';
import { StickersComponent } from './stickers.component';
import { StickersState } from './store';

@NgModule({
  declarations: [StickersComponent],
  imports: [
    CommonModule,
    NgxsModule.forFeature([StickersState])
  ],
  exports: [StickersComponent],
  providers: [StickersService],
})
export class StickersModule {
}
