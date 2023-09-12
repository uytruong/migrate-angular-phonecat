import * as angular from "angular";

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
  templateUrl: string = '/app/phone-list/phone-list.template.html';
}
