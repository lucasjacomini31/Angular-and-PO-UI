import { Injectable, Component, Input, EventEmitter } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


import { Observable } from 'rxjs';
import { CookieService } from "ngx-cookie-service";
import { AppComponent} from "./app.component";

@Injectable({
  providedIn: 'root'
})

export class ServicoRestService {
  constructor(private http: HttpClient , private cookie: CookieService) {  }

  teste: string;

  restUrl = 'api/dts/datasul-rest/resources/prg/cdp/v1/getcotacao';

  public getItens(): Observable<any> {
    let headers = this.getHeaders();
    return this.http.get(`${this.restUrl}` , { headers } );
  }


  public getItensID(valor: any, nome: string): Observable<any> {
    let headers = this.getHeaders();
    return this.http.get(`${this.restUrl}?` + nome + `=` + valor , { headers } );
  }

  public getHeaders(): HttpHeaders{

    let headers = new HttpHeaders({'JOSSO_SESSIONID':'JOSSO_SESSIONID=53875C417742CED531FD25444A8D74B1'});
    return headers;
  }

  // dando erro quando filtro
  public getItensPageSize(valord: any): Observable<any>{
    let headers = this.getHeaders();
    return this.http.get(`${this.restUrl}?pageSize=` + valord , { headers } );
  }


}




