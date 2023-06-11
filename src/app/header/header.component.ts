import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{  
  signedin:boolean = false;
  showdrop:boolean = false;
  
  ngOnInit() {
    
  }
  public showdropdown(){
    this.showdrop = !this.showdrop;
  }
   public triggerSignIn() {
    this.signedin = true;  
  }
}
