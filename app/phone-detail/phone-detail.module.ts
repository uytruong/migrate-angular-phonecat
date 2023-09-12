import * as angular from 'angular';
import 'angular-route';
import '../core/phone/phone.module';
import {PhoneDetailComponent} from "./phone-detail.component";

// Define the `phoneDetail` module
angular
    .module('phoneDetail', [
      'ngRoute',
      'core.phone'
    ])
    .component({'phoneDetail': new PhoneDetailComponent()});
