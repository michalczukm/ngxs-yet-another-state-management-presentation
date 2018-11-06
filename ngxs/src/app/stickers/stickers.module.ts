import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { NgxsModule } from '@ngxs/store';
import { StickersService } from './stickers.service';
import { StickersComponent } from './stickers.component';
import { StickersState } from './store';

@NgModule({
  declarations: [StickersComponent],
  imports: [
    CommonModule,
    HttpModule,
    NgxsModule.forFeature([StickersState])
  ],
  exports: [StickersComponent],
  providers: [StickersService],
})
export class StickersModule {
}
