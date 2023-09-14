import * as angular from 'angular';
import 'angular-route';
import '../core/phone/phone.module';
import {downgradeComponent} from '@angular/upgrade/static';
import {PhoneDetailComponent} from "./phone-detail.component";

// Define the `phoneDetail` module
angular
    .module('phoneDetail', [])
    .directive(
        'phoneDetail',
        downgradeComponent({component: PhoneDetailComponent}) as angular.IDirectiveFactory
    );
