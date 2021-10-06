import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { map} from 'rxjs/operators';
import { WoocommerceProvider } from 'src/providers/woocommerce/woocommerce';
import { UtilsProvider } from 'src/utils/utils';
const REQUEST_TIMEOUT: number = 50000;
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  username = "";
  password = "";
  WooCommerce: any;
  userLoginData:any;
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
     
    // this.http.get("https://honeebi.com/wp-json/custom-plugin/login?username="+this.username+"&password="+this.password,{
    //   headers: new HttpHeaders({
    //       'Content-Type': 'application/json'
    //   }),observe: 'response'}).pipe(
    //   map((response) => {
    //       // return response;
    //       console.log("login data",response);
    //       //     this.userLoginData = result[0].data
    //       //     localStorage.setItem("loginData",JSON.stringify(this.userLoginData))
    //   }));
    
     this.http.get("https://honeebi.com/wp-json/custom-plugin/login?username="+this.username+"&password="+this.password)
      .subscribe(result => {
        console.log("login data object",result);
        var stringJson = JSON.stringify(result)
        this.userLoginData = JSON.parse(stringJson);
        console.log("login data json",this.userLoginData.data);
        localStorage.setItem("loginData",JSON.stringify(this.userLoginData.data))
        localStorage.setItem('isLoggedIn', 'true');
        this.router.navigate(['./tabnav/explore']);
       }, error => {
        console.log(error);
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

