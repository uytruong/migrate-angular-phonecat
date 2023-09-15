import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {PhoneData} from "./phonedata.model";

@Injectable()
export class PhoneService {
  constructor(private http: HttpClient) { }

  query(): Observable<PhoneData[]> {
    return this.http.get<PhoneData[]>(`phones/phones.json`);
  }

  get(phoneId: string | null): Observable<PhoneData> {
    return this.http.get<PhoneData>(`phones/${phoneId}.json`);
  }
}
