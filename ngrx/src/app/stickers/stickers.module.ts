import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { StickersService } from './stickers.service';
import { StickersComponent } from './stickers.component';
import { StickerEffects } from './effects/stickers.effects';

@NgModule({
  declarations: [StickersComponent],
  imports: [
    CommonModule,
    EffectsModule.forFeature([StickerEffects])
  ],
  exports: [StickersComponent],
  providers: [StickersService],
})
export class StickersModule {
}
