import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

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
}
