import * as angular from 'angular';
import 'angular-resource';
import {PhoneService} from './phone.service';

// Define the `core.phone` module
angular
    .module('core.phone', ['ngResource'])
    .service('phoneService', PhoneService);
