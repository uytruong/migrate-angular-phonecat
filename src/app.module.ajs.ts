import * as angular from 'angular';
import 'angular-route';
import 'angular-animate';

import 'bootstrap/dist/css/bootstrap.min.css'
import "./app.css";
import "./app.animations.css";

import hashPrefixConfig from "./hashprefix.config";
import routesConfig from "./routes.config";

import './core/core.module';
import {AppAnimations} from './app.animations';
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
    .animation('.phone', AppAnimations.Factory())
    .config(hashPrefixConfig)
    .config(routesConfig)
