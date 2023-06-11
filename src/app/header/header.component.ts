import { Component, OnInit ,Output,EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
  
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{  
  signedin:boolean = false;
  showdrop:boolean = false;
  showdropGames:boolean = false;
  url = "http://localhost:3000";
  showSigninpopup:boolean=false;
  name: any;
  email: any;
  password: any;
  
constructor(private http: HttpClient) { }
  ngOnInit() {
    
  }
  public showdropdown(){
    this.showdrop = !this.showdrop;
    if(this.showdropGames) this.showdropGames = false;
  }  
  public showdropdownGames(){
    if(this.showdrop) this.showdrop= false;
    this.showdropGames = !this.showdropGames;
  }
   public triggerSignIn() {
    this.showSigninpopup = true;
    // this.signedin = true;  
  }
  closepopup(){
    this.showSigninpopup=false;
  }
  signupsubmit(name: any,mail: any,conf_mail: any,age: any,pass: any){
    if(name && mail && conf_mail && age && pass){
      if(mail == conf_mail){
        let params={
          "user_name":name,
          "user_mail":mail,
          "age":age,
          "pass":pass
        }
        this.http.get(this.url+"/register-user",{params:params}).subscribe((data) =>{
            this.closepopup();
            alert("Signed-In!");
            this.signedin = true;
        });
      }else{
        alert("Email and Confirmation Email must be same!!");
      }
    }else{
      alert("Invalid Form Data!! Please Try Again!!");
    }
  }
}
