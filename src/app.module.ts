import {DoBootstrap, NgModule} from '@angular/core';
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

@NgModule({
  imports: [
    BrowserModule,
    UpgradeModule,
    HttpClientModule,
    FormsModule
  ],
  declarations: [
    PhoneListComponent,
    PhoneDetailComponent,
    CheckmarkPipe
  ],
  providers: [
    PhoneService,
    routeParamsProvider
  ]
})
export class AppModule implements DoBootstrap {
  constructor(private upgrade: UpgradeModule) {
  }

  ngDoBootstrap() {
    this.upgrade.bootstrap(document.documentElement, ['phonecatApp'], {strictDi: true});
  }
}