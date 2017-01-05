import { Injectable } from '@angular/core';
import { Http,Headers,RequestOptions } from '@angular/http';
import { AlertController } from 'ionic-angular';
import 'rxjs/add/operator/map';

/*
  Generated class for the LoginService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class LoginService {
  data: any;
  constructor(public http: Http, public alertCtrl: AlertController) {
    console.log('Hello LoginService Provider');
  }

    sendData(dato1,dato2){
    let params = JSON.stringify({ usr:dato1, psw:dato2 });
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    let options = new RequestOptions({ headers: headers });
    let url = "http://192.168.1.87:3000/api/users";
    //let url = "http://subir-imagenes.localhost:3000/api/users";
    console.log("Enviando datos !!!" + dato1 + " " + dato2);

    this.http.post(url, params,options)
        .subscribe(data => {
            let alert = this.alertCtrl.create({
                title: "Data String",
                subTitle: data.json().data,
                buttons: ["close"]
            });
            alert.present(alert);
        }, error => {
            console.log(JSON.stringify(error.json()));
        });

  }



  setMessage(){
    console.log("Hello --- ");
  }


  /*

  load() {
    if (this.data) {
      // already loaded data
      return Promise.resolve(this.data);
    }

    // don't have the data yet
    return new Promise(resolve => {
      // We're using Angular HTTP provider to request the data,
      // then on the response, it'll map the JSON data to a parsed JS object.
      // Next, we process the data and resolve the promise with the new data.
      this.http.get('https://httpbin.org/ip')
        .map(res => res.json())
        .subscribe(data => {
          // we've got back the raw data, now generate the core schedule data
          // and save the data for later reference
          this.data = data;
          resolve(this.data);
        });
    });
  }
/*
  submit() {
        var link = 'http://nikola-breznjak.com/_testings/ionicPHP/api.php';
        var data = JSON.stringify({username: this.data.username});
        
        this.http.post(link, data)
        .subscribe(data => {
         this.data.response = data._body;
        }, error => {
            console.log("Oooops!");
        });
  }
  
  makeGetRequest() {
        this.http.get("https://httpbin.org/ip")
        .subscribe(data => {
            var alert = Alert.create({
                title: "Your IP Address",
                subTitle: data.json().origin,
                buttons: ["close"]
            });
            this.nav.present(alert);
        }, error => {
            console.log(JSON.stringify(error.json()));
            console.log('yolo')
            alert('hello');
        });
    }
    */

}
