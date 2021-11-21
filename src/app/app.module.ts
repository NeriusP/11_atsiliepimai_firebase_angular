import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AtsiliepimaiComponent } from './atsiliepimai/atsiliepimai.component';
import { AddAtsiliepimasComponent } from './atsiliepimai/add-atsiliepimas/add-atsiliepimas.component';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    AtsiliepimaiComponent,
    AddAtsiliepimasComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
