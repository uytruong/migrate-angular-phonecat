import {PhoneService} from "../core/phone/phone.service";
import {Component} from "@angular/core";
import {PhoneData} from "../core/phone/phonedata.model";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'phone-detail',
  templateUrl: './phone-detail.template.html'
})
export class PhoneDetailComponent {
  phone: PhoneData | null = null;
  mainImageUrl: string = '';

  constructor(activatedRoute: ActivatedRoute, phoneService: PhoneService) {
    const phoneId = activatedRoute.snapshot.paramMap.get('phoneId');
    phoneService.get(phoneId).subscribe(phone => {
      this.phone = phone;
      this.setImage(phone.images[0]);
    });
  }

  setImage(imageUrl: string) {
    this.mainImageUrl = imageUrl;
  }
}
