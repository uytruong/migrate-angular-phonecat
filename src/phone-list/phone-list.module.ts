import * as angular from 'angular';
import 'angular-route';
import '../core/phone/phone.module';
import {PhoneListComponent} from "./phone-list.component";

// Define the `phoneList` module
angular
    .module('phoneList', ['core.phone'])
    .component({'phoneList': new PhoneListComponent()});
