import { Prod } from './loja/lojahome/prod';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http: HttpClient) { }

  urlreq = 'https://economia.awesomeapi.com.br/json/all/';

  getCoin() {
    return this.http.get(this.urlreq);
  }

}




