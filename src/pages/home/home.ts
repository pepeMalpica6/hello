import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { LoginService } from '../../providers/login-service'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [LoginService]
})


export class HomePage {
  login: any;
  public loginConect: any;
  username:any; psw: any;
  constructor(public navCtrl: NavController, public loginService: LoginService) {
    this.login = "Login";
  }

  sendLoginData(){
    this.loginService.sendData(this.username, this.psw);
  }




  changeMessage(){
    
    this.loginService.setMessage();
    
    /*
    this.loginService.load()
    .then(data => {
      this.login = data;
    });*/
  }

}
