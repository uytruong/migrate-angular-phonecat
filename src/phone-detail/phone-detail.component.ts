import {PhoneService} from "../core/phone/phone.service";
import {RouteParams} from "../ajs-upgraded-providers";
import {Component} from "@angular/core";
import {PhoneData} from "../core/phone/phonedata.model";

@Component({
  selector: 'phone-detail',
  templateUrl: './phone-detail.template.html'
})
export class PhoneDetailComponent {
  phone: PhoneData | null = null;
  mainImageUrl: string = '';

  constructor(routeParams: RouteParams, phoneService: PhoneService) {
    const phoneId = routeParams['phoneId'];
    phoneService.get(phoneId).subscribe(phone => {
      this.phone = phone;
      this.setImage(phone.images[0]);
    });
  }

  setImage(imageUrl: string) {
    this.mainImageUrl = imageUrl;
  }
}
