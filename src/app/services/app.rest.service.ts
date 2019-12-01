import { Injectable } from '@angular/core';
// import { RequestOptions, Headers, ResponseContentType } from '@angular/http';
// import 'rxjs/add/operator/toPromise';
import { HttpClient } from '@angular/common/http';

@Injectable ()
export class AppRestService {

  constructor(
    private http: HttpClient,
  ) {}

  // Error
  handleError(error: any): Promise<any> {
    console.error('Erreur : ', error);
    return Promise.reject(error.message || error);
  }

  get(url: string): Promise<any> {
    let baseUrl: string;
    let headers: Headers;
    // let options: RequestOptions;

    baseUrl = 'put the base url here';
    headers = new Headers();
    headers.append('Content-Type', 'application/json');
    // options = new RequestOptions({ headers: headers });

    return this.http.get(baseUrl + url).toPromise();
  }
}
