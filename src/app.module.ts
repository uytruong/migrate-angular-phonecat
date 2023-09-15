import 'bootstrap/dist/css/bootstrap.min.css'
import "./app.css";

import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from "@angular/forms";

import {PhoneService} from "./core/phone/phone.service";
import {PhoneListComponent} from "./phone-list/phone-list.component";
import {PhoneDetailComponent} from "./phone-detail/phone-detail.component";
import {CheckmarkPipe} from "./core/checkmark/checkmark.pipe";
import {AppComponent} from "./app.component";
import {AppRoutingModule} from "./app-routing.module";

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    PhoneListComponent,
    PhoneDetailComponent,
    CheckmarkPipe
  ],
  providers: [
    PhoneService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}