import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from 'src/app/model/wiki-film';

@Injectable({
  providedIn: 'root'
})
export class BaseService {

  private httpClient: HttpClient;

  constructor(httpClient: HttpClient) {
    this.httpClient = httpClient;
  }

  doGET(url: string) {
    console.log('doGET -> url: ' + url);
    return Observable.create(observer => {
      this.httpClient.get(url).subscribe(
        data => {
          observer.next(data);
        });
    });
  }

  doPOST(url: string, body: any) {
    console.log('doGET -> url: ' + url);
    return Observable.create(observer => {
      this.httpClient.post<User>(url, body).subscribe(
        data => {
          observer.next(data);
        });
    });
  }
}
