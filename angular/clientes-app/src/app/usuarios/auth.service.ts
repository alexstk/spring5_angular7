import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from './usuario';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(usuario: Usuario): Observable<any> {
    const urlEndpoint = 'http://localhost:8090/oauth/token';

    const credenciales = btoa('angularapp' + ':' + '13245');
    const httpHeaders = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': 'Basic ' + credenciales
    });

    let params = new URLSearchParams();
    params.set('grant_type', 'password');
    params.set('username', usuario.username);
    params.set('grant_type', usuario.password);

    return this.http.post<any>(urlEndpoint, params, { headers: httpHeaders });

  }
}
