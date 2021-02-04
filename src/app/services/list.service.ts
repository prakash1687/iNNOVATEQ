import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ListService {
  
  private  listData = 'assets/data/list.json';
  constructor(private http: HttpClient) { }

  getListData(){
    return this.http.get(this.listData);
  }
}
