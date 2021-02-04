import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RecentBlogsService {
  private  blogAPi = 'assets/data/blog.json';
  constructor(private http: HttpClient) { }

  getblogData(){
    return this.http.get(this.blogAPi);
  }
}
