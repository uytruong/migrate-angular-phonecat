import * as angular from "angular";
import {PhoneData, PhoneService} from "../core/phone/phone.service";
const template = require('./phone-list.template.html');

export class PhoneListController {
  phones: PhoneData[] = [];
  orderProp: string;

  static $inject = ['phoneService'];
  constructor(phoneService: PhoneService) {
    phoneService.query().subscribe(phones => this.phones = phones);
    this.orderProp = 'age';
  }

}

export class PhoneListComponent implements angular.IComponentOptions {
  controller: any = PhoneListController;
  template: string = template.default;
}
