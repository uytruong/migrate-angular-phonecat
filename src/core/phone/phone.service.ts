import 'angular-resource';

export class PhoneService {
  $resource: any;
  static $inject = ['$resource'];

  constructor($resource) {
    this.$resource = $resource('phones/:phoneId.json', {}, {
      query: {
        method: 'GET',
        params: {phoneId: 'phones'},
        isArray: true
      }
    });
  }

  query() {
    return this.$resource.query();
  }

  get(phoneIdObj, callback) {
    return this.$resource.get(phoneIdObj, callback);
  }
}
