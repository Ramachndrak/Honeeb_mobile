import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { WoocommerceProvider } from 'src/providers/woocommerce/woocommerce';
import { UtilsProvider } from 'src/utils/utils';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  username = "";
  password = "";
  WooCommerce: any;
  constructor(public http: HttpClient,public alertCtrl: UtilsProvider,private router:Router,private WP: WoocommerceProvider) {
    this.WooCommerce = WP.init();
   }

  ngOnInit() {
  }
  // login(){


  //    let inputObj = {
  //           "username": "ram",
  //           "password": "pandu501"
  //   }

  //   this.username = "ram"
  //   this.password = "pandu501"
  //   headers: new HttpHeaders({
  //     'Content-Type': 'application/json',
  //     'Authorization': localStorage.getItem('accesstoken')
  // })

//   this.WooCommerce.postAsync("customers",inputObj).then((data) => {
// console.log("response",data)
//   })

  // this.WooCommerce.postAsync("customers",customerData).then((data) => {
    // let headers = new HttpHeaders({'Content-Type':'application/json'});

    // this.http.post("https://honeebi.com/wp-json/jwt-auth/v1/token",inputObj,{headers:headers})
    //   .subscribe(data => {
    //     console.log(data);
    //    }, error => {
    //     console.log(error);
    //   });


    // this.http.get("http://honeebi.com/wp-json/jwt-auth/v1/token/?&username=" + this.username + "&password=" + this.password)
    // .subscribe((res) => {
    //   console.log(res);

      // let response = res.json();
      //  if(response.error){
        // this.toastCtrl.create({
        //   message: response.error,
        //   duration: 5000
        // }).present();
        // return;
      // }

      // localStorage.set("userLoginInfo", res).then( (data) =>{

       // this.alertCtrl.showLoaderWithTitle("Login Successful")
      //   this.alertCtrl.create({
      //    title: "Login Successful",
      //    message: "You have been logged in successfully.",
      //    buttons: [{
      //      text: "OK",
      //      handler: () => {
      //       //  if(this.navParams.get("next")){
      //       //    this.navCtrl.push(this.navParams.get("next"));
      //       //  } else {
      //       //    this.navCtrl.pop();
      //       //  }             
      //      }
      //    }]
      //  }).present();
      // })

    // });
  // }
  login()
  {
      const headers = new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded'
      });
      const userData = `username=${this.username}&password=${this.password}`; 
      const url = 'http://honeebi.com';
      return new Promise((resolve, reject) => {
        this.http
          .post(`${url}/wp-json/jwt-auth/v3/token`, userData, { headers })
          .subscribe(
            res => {
              resolve(res);
            },
            err => {
              resolve(err);
            }
          );
      });
  }
  signup()
  {
    this.router.navigate(['./signupwithmobileno']);
  }
}
function timeout(REQUEST_TIMEOUT: any): import("rxjs").OperatorFunction<import("@angular/common/http").HttpResponse<Object>, unknown> {
  throw new Error('Function not implemented.');
}

