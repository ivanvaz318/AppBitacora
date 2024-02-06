import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({providedIn: 'root'})
export class ConfigService {
    headers = new BehaviorSubject<string>('');
    constructor() { }
  
    setLocal() {
      let headers:any = { 'Content-Type': 'application/json' };
      let token = this.token;
  
      if (token) headers['Authorization'] = `Bearer ${token}`;
      this.headers.next(headers);
    }
  
    get token() {
      return localStorage['tokenAdmin'];
    }
    public get getHeaders(): HttpHeaders {
      let headers = new HttpHeaders({
        'Content-type': 'application/json',
      });
  
      if (this.token) {
        headers = headers.append('Authorization', 'Bearer '.concat(this.token));
      }
  
      return headers;
    }
  
  }