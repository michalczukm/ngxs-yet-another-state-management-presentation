import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StickersModule } from './stickers';
import { CartModule } from './cart';
import { TshirtsModule } from './tshirts';
import { NG_ENTITY_SERVICE_CONFIG } from '@datorama/akita-ng-entity-service';
import { AkitaNgDevtools } from '@datorama/akita-ngdevtools';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    CartModule,
    StickersModule,
    TshirtsModule,
    AppRoutingModule,
    AkitaNgDevtools,
    // 👇 for some reason dont work - no dev tools in dev mode
    // environment.production ? [] : AkitaNgDevtools,
  ],
  providers: [
    {
      provide: NG_ENTITY_SERVICE_CONFIG,
      useValue: {
        baseUrl: 'http://localhost:3000',
      },
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
