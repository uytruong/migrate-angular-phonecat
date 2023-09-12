import * as angular from "angular";
import './phone/phone.module';
import {CheckmarkFilter} from "./checkmark/checkmark.filter";

// Define the `core` module
angular
    .module('core', ['core.phone'])
    .filter('checkmark', CheckmarkFilter.Factory);
