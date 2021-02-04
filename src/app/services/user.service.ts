import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private  userData = 'https://jsonplaceholder.typicode.com/users';
  constructor(private http: HttpClient) { }

  getUserData(){
    return this.http.get(this.userData);
  }
}
