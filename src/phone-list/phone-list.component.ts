import {PhoneService} from "../core/phone/phone.service";
import {Component} from "@angular/core";
import {PhoneData} from "../core/phone/phonedata.model";

const template = require('./phone-list.template.html');

@Component({
  selector: 'phone-list',
  template: template.default
})
export class PhoneListComponent {
  phones: PhoneData[] = [];
  orderProp: string;
  query: string = '';

  constructor(phoneService: PhoneService) {
    phoneService.query().subscribe(phones => this.phones = phones);
    this.orderProp = 'age';
  }

  getPhones(): PhoneData[] {
    return this.sortPhones(this.filterPhones(this.phones));
  }

  private filterPhones(phones: PhoneData[]) {
    if (phones && this.query) {
      return phones.filter(phone => {
        const name = phone.name.toLowerCase();
        const snippet = phone.snippet.toLowerCase();
        return name.indexOf(this.query) >= 0 || snippet.indexOf(this.query) >= 0;
      });
    }
    return phones;
  }

  private sortPhones(phones: PhoneData[]) {
    if (phones && this.orderProp) {
      return phones
          .slice(0) // Make a copy
          .sort((a, b) => {
            if (a[this.orderProp] < b[this.orderProp]) {
              return -1;
            } else if ([b[this.orderProp] < a[this.orderProp]]) {
              return 1;
            } else {
              return 0;
            }
          });
    }
    return phones;
  }
}
