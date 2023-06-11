import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'studypartner';
  gotosubject:boolean = false;
  gotohome:boolean = true;
  changescreen(event: string){
    console.log(this.gotohome,this.gotosubject,"ASDASDASD");
    if(event =="gotosubject"){
      this.gotosubject=true
      this.gotohome=false;
    }else if(event =="gotohome"){
      this.gotohome = true;
      this.gotosubject = false;
    }
  } 
}
