import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http: HttpClient) { }

  url="https://fakestoreapi.com/users";

  getUsers()
  {
    return this.http.get(this.url);
  }
  singleUsers(id:any)
  {
    return this.http.get(`${this.url}/${id}`);
  }

  adduser(data:any){
    return this.http.post('', data);
  }
}

