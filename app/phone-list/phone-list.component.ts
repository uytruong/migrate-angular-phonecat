import * as angular from "angular";
const template = require('./phone-list.template.html');

export class PhoneListController {
  phones: any[];
  orderProp: string;

  static $inject = ['phoneService'];
  constructor(phoneService: any) {
    this.phones = phoneService.query();
    this.orderProp = 'age';
  }

}

export class PhoneListComponent implements angular.IComponentOptions {
  controller: any = PhoneListController;
  template: string = template.default;
}
