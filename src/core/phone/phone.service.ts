import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

export interface PhoneData {
  imageUrl: string;
  id: string;
  name: string;
  snippet: string;
  images: string[];
}

@Injectable()
export class PhoneService {
  constructor(private http: HttpClient) { }

  query(): Observable<PhoneData[]> {
    return this.http.get<PhoneData[]>(`phones/phones.json`);
  }

  get(phoneId: string): Observable<PhoneData> {
    return this.http.get<PhoneData>(`phones/${phoneId}.json`);
  }
}
