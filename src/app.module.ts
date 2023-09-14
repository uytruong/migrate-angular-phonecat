import {DoBootstrap, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {UpgradeModule} from '@angular/upgrade/static';
import {HttpClientModule} from '@angular/common/http';

// angularjs module
import './app.module.ajs';
import {PhoneService} from "./core/phone/phone.service";

@NgModule({
  imports: [
    BrowserModule,
    UpgradeModule,
    HttpClientModule
  ],
  providers: [
    PhoneService,
  ]
})
export class AppModule implements DoBootstrap {
  constructor(private upgrade: UpgradeModule) {
  }

  ngDoBootstrap() {
    this.upgrade.bootstrap(document.documentElement, ['phonecatApp'], {strictDi: true});
  }
}