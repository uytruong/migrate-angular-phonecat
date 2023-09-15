import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {UpgradeModule} from '@angular/upgrade/static';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from "@angular/forms";

// angularjs module
import './app.module.ajs';
import {PhoneService} from "./core/phone/phone.service";
import {PhoneListComponent} from "./phone-list/phone-list.component";
import {routeParamsProvider} from "./ajs-upgraded-providers";
import {PhoneDetailComponent} from "./phone-detail/phone-detail.component";
import {CheckmarkPipe} from "./core/checkmark/checkmark.pipe";
import {AppComponent} from "./app.component";
import {AppRoutingModule} from "./app-routing.module";

@NgModule({
  imports: [
    BrowserModule,
    UpgradeModule,
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
    PhoneService,
    routeParamsProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}