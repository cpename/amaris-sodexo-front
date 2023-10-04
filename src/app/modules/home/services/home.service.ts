import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { Comuna } from '../interfaces/comuna';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor( private _httpClient: HttpClient ) { }

  public getComunas(): Observable<Comuna[]>{
    return this._httpClient.get<Comuna[]>(`${environment.apiUrl}/comunas`);
  }

}
