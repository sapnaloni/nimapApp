import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
    private url= 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  registerUser(userData: any):Observable<any> {
    return this.http.post(`${this.url}/users`,userData)
  }

}

