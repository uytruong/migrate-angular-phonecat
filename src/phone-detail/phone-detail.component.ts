import * as angular from "angular";
import {PhoneData, PhoneService} from "../core/phone/phone.service";
const template = require('./phone-detail.template.html');

export class PhoneDetailController {
  phone: PhoneData | null = null;
  mainImageUrl: string = '';

  static $inject = ['$routeParams', 'phoneService'];
  constructor($routeParams: angular.route.IRouteParamsService, phoneService: PhoneService) {
    const phoneId = $routeParams['phoneId'];
    phoneService.get(phoneId).subscribe(phone => {
      this.phone = phone;
      this.setImage(phone.images[0]);
    });
  }

  setImage(imageUrl: string) {
    this.mainImageUrl = imageUrl;
  }
}
export class PhoneDetailComponent implements angular.IComponentOptions {
  controller: any = PhoneDetailController;
  template: string = template.default;
}
