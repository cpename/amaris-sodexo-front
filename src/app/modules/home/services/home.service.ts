import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { Comuna } from '../interfaces/comuna';
import { Usuario } from '../interfaces/usuario.interface';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor( private _httpClient: HttpClient ) { }

  public getComunas(): Observable<Comuna[]>{
    return this._httpClient.get<Comuna[]>(`${environment.apiUrl}/comunas`);
  }

  public getUsuarios(): Observable<Usuario[]>{
    return this._httpClient.get<Usuario[]>(`${environment.apiUrl}/usuarios`);
  }

}
