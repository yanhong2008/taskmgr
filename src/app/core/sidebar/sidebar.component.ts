import { Component, OnInit } from '@angular/core';
import{getDate} from 'date-fns';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

   today='day';
  constructor() { }

  ngOnInit() {
    console.log(getDate(new Date()));
    this.today=`day${getDate(new Date())}`;
  }

}