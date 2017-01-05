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
  username: any;
  constructor(public navCtrl: NavController, public loginService: LoginService) {
    this.login = "Login";
    this.username;
  }

  sendLoginData(){
    this.loginService.sendData(this.username);
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
