import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})

export class UsersComponent implements OnInit {
  userData: any = [];
  userlistCount;
  displayTable = false;
  displayGrid = true;
  matTable = [
    {name: 'Hydrogen', designation: 'Romaguera-Crona', date: '12 July 2020'},
    {name: 'Helium', designation: 'Romaguera-Crona', date: '12 July 2020'},
    {name: 'Lithium', designation: 'Considine-Lockman', date: '12 July 2020'},
    {name: 'Beryllium', designation: 'Romaguera-Jacobson', date: '12 July 2020'},
    {name: 'Boron', designation: '	Abernathy Group', date: '12 July 2020'},
    {name: 'Carbon', designation: '	Abernathy Group', date: '12 July 2020'},
    {name: 'Nitrogen', designation: '	Abernathy Group', date: '12 July 2020'},
    {name: 'Oxygen', designation: 'Considine-Lockman', date: '12 July 2020'},
    {name: 'Fluorine', designation: '	Abernathy Group', date: '12 July 2020'},
    {name: 'Neon', designation: 'Romaguera-Jacobson', date: '12 July 2020'},
  ];;
  constructor(private user: UserService) { }

  ngOnInit() {
    this.getUserListData();
  }



  getUserListData() {
    this.user.getUserData().subscribe(data => {
      this.userData = data;
      console.log('data', this.userData);
      this.userlistCount = this.userData.length;
    })
  }

  showTable() {
    this.displayTable = true;
    this.displayGrid = false;
  }

  showGrid() {
    this.displayGrid = true;
    this.displayTable = false;
  }


}
