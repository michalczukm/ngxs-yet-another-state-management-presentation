import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StickersModule } from './stickers';
import { CartModule } from './cart';
import { TshirtsModule } from './tshirts';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    CartModule,
    StickersModule,
    TshirtsModule,
    AppRoutingModule
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
