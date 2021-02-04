import { Component, OnInit, Input } from '@angular/core';
import {AfterViewInit, ViewChild} from '@angular/core';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

export interface PeriodicElement {
  name: string;
  designation: string;
  date: string;
}

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})

export class GridComponent implements OnInit {
  @Input() gridData;  
  @Input() matData; 
  ELEMENT_DATA: PeriodicElement[] = [];
  displayedColumns: string[] = ['name', 'designation', 'date'];
  dataSource;
  
  constructor() { }

  ngOnInit() {
    // console.log('gridData', this.gridData);
    // console.log('matData', this.matData);
    this.ELEMENT_DATA = this.matData;
    this.dataSource = new MatTableDataSource(this.ELEMENT_DATA);
  }

  @ViewChild(MatSort) sort: MatSort;

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

}
