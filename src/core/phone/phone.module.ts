declare const angular: angular.IAngularStatic;
import {PhoneService} from './phone.service';
import {downgradeInjectable} from '@angular/upgrade/static';

// Define the `core.phone` module
angular
    .module('core.phone', [])
    .factory('phoneService', downgradeInjectable(PhoneService));
