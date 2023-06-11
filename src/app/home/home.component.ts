import { Component, OnInit, HostListener,OnDestroy , Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router'  ;


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  constructor(private router: Router) {
  }
  ngOnInit(): void {
  }
  searchCourse(value1: any){
  }

  @Output() changeScreenEvent = new EventEmitter<string>();
  
  openSubjectComponent(){
    console.log("here");
   this.changeScreenEvent.emit("gotosubject");
  }
}
