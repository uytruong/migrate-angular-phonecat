import * as angular from 'angular';
import 'angular-route';
import 'angular-animate';
import hashPrefixConfig from "./hashprefix.config";
import routesConfig from "./routes.config";

import './core/core.module';
import './phone-detail/phone-detail.module';
import './phone-list/phone-list.module'

// Define the `phonecatApp` module
angular
    .module('phonecatApp', [
      'ngAnimate',
      'ngRoute',
      'core',
      'phoneDetail',
      'phoneList'])
    .config(hashPrefixConfig)
    .config(routesConfig);
