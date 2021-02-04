import { Component, OnInit } from '@angular/core';
import { RecentBlogsService } from '../services/recent-blogs.service';
import { ListService } from '../services/list.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  blogData: any = [];
  listData: any = [];

  constructor(private blog: RecentBlogsService, private list: ListService) { }

  ngOnInit() {
    this.getRecentBlogData();
    this.getlistCountData();
  }
  
  getlistCountData() {
    this.list.getListData().subscribe(res => {
      this.listData = res;
      console.log('listData', this.listData);
    })
  }
  getRecentBlogData(){
    this.blog.getblogData().subscribe(data => {
      this.blogData = data;
      console.log('data', this.blogData);
    })
  }

}
