import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiServeUrl='http://localhost:8080';

  constructor(private http: HttpClient) { }

  getPublicContent(): Observable<any> {
    return this.http.get(`${this.apiServeUrl}/api/test/all`, { responseType: 'text' });
  }
  getUserBoard(): Observable<any> {
    return this.http.get(`${this.apiServeUrl}/api/test/user`, { responseType: 'text' });
  }
  getAdminBoard(): Observable<any> {
    return this.http.get(`${this.apiServeUrl}/api/test/admin`, { responseType: 'text' });
  }

  }