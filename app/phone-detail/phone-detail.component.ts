import * as angular from "angular";
const template = require('./phone-detail.template.html');

export class PhoneDetailController {
  phone: any;
  mainImageUrl: string = '';

  static $inject = ['$routeParams', 'phoneService'];
  constructor($routeParams: angular.route.IRouteParamsService, phoneService: any) {
    const phoneId = $routeParams['phoneId'];
    this.phone = phoneService.get({phoneId}, (phone: any) => {
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
