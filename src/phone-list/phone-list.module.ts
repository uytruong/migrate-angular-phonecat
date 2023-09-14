import * as angular from 'angular';
import 'angular-route';
import '../core/phone/phone.module';
import {PhoneListComponent} from "./phone-list.component";
import {downgradeComponent} from '@angular/upgrade/static';

// Define the `phoneList` module
angular
    .module('phoneList', ['core.phone'])
    .directive(
        'phoneList',
        downgradeComponent({component: PhoneListComponent}) as angular.IDirectiveFactory
    );
