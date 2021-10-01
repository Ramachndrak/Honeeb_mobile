import { Component, NgZone, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoadingControllerProvider } from 'src/loading-controller/loading-controller';
import { WoocommerceProvider } from 'src/providers/woocommerce/woocommerce';
import { UtilsProvider } from 'src/utils/utils';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Component({
  selector: 'app-otpverification',
  templateUrl: './otpverification.page.html',
  styleUrls: ['./otpverification.page.scss'],
})
export class OtpverificationPage implements OnInit {
   WooCommerce: any;
   signup_link = "wp-json/wc/v3/customers";
  userName: string = '';
  email: string = '';
  password: string = '';
  mobile: string = '';
  address1: string = '';
  address2: string = '';
  pincode: string = '';
  landmark: string = '';
  validateForm: FormGroup;
  isValid: boolean = false;
  constructor(private router:Router,private _fb: FormBuilder,private WP: WoocommerceProvider, private utls: UtilsProvider,
    private loader: LoadingControllerProvider, private http: HttpClient,
    private zone: NgZone) {
      this.WooCommerce = WP.init();
    this.validateForm = this._fb.group({
      userName: new FormControl('', [Validators.required, Validators.pattern(''),Validators.minLength(3), Validators.maxLength(20)]),
      email: new FormControl('', [Validators.required, Validators.pattern(''), Validators.minLength(8), Validators.maxLength(15)]),
      password: new FormControl('', [Validators.required, Validators.pattern(''), Validators.minLength(8), Validators.maxLength(15)]),
      mobile: new FormControl('', [Validators.required, Validators.pattern(''), Validators.minLength(8), Validators.maxLength(15)]),
      address1: new FormControl('', [Validators.required, Validators.pattern(''), Validators.minLength(8), Validators.maxLength(15)]),
      address2: new FormControl('', [Validators.required, Validators.pattern(''), Validators.minLength(8), Validators.maxLength(15)]),
      pincode: new FormControl('', [Validators.required, Validators.pattern(''), Validators.minLength(8), Validators.maxLength(15)]),
      landmark: new FormControl('', [Validators.required, Validators.pattern(''), Validators.minLength(8), Validators.maxLength(15)]),
  });
  }
  ngOnInit() {
  }
  onSubmit()
    {
      this.createCustomerAPI()
    }
    createCustomerAPI()
    {


      // let customerData = {
      //   customer : {}
      // }
      //  customerData.customer = {
      //   "email": this.email,
      //   "first_name": this.userName,
      //   "last_name": this.userName,
      //   "username": this.userName,
      //   "password": this.password,
      //   "billing_address": {
      //     "first_name": this.userName,
      //     "last_name": this.userName,
      //     "company": "",
      //     "address_1": this.address1,
      //     "address_2": this.address2,
      //     "city": this.landmark,
      //     "state": this.landmark,
      //     "postcode": this.pincode,
      //     "country": this.landmark,
      //     "email": this.email,
      //     "phone": this.mobile
      //   },
      //   "shipping_address": {
      //     "first_name": this.userName,
      //     "last_name": this.userName,
      //     "company": "",
      //     "address_1": this.address1,
      //     "address_2": this.address2,
      //     "city": this.landmark,
      //     "state": this.landmark,
      //     "postcode": this.pincode,
      //     "country": this.landmark,
      //     "email": this.email,
      //     "phone": this.mobile
      //   }
      // }


    //   const header = new HttpHeaders({
    //     'Content-Type': 'application/x-www-form-urlencoded'
    //   });
    //    const  url = 'http://honeebi.com';
    //  const consumerKey = 'ck_2362fa85a43bd64963b3b3f452cb739e0771d997';
    // const consumerSecret = 'cs_16a4365958209ad544b7292ba2011f0255530f78';
    //    const data = `username=${this.userName}&email=${this.email}&password=${this.password}`;
    //   return new Promise(resolve => {
    //     this.http
    //       .post(
    //         `${url}/wp-json/wc/v1/customers?consumer_key=${
    //           consumerKey
    //         }&consumer_secret=${consumerSecret}`,
    //         data,
    //         { headers: header }
    //       )
    //       .subscribe(customerData => {
    //         resolve(customerData);
    //       });
    //   });

      // this.WooCommerce.postAsync('customers', customerData.customer).then( (data) => {
      // }





      //  if(this.billing_shipping_same){
      //   this.newUser.shipping_address = this.newUser.shipping_address;
      // }
      //  this.WooCommerce.postAsync('customers', customerData).then( (data) => {
      //    let response = (JSON.parse(data.body));
      //    if(response.customer){
      //      console.log("response.customer",response.customer)
          // this.alertCtrl.create({
          //   title: "Account Created",
          //   message: "Your account has been created successfully! Please login to proceed.",
          //   buttons: [{
          //     text: "Login",
          //     handler: ()=> {
          //       //TODO
          //     }
          //   }]
          // }).present();
        // } else if(response.errors){
        //   console.log("response.errors",response.errors)
          // this.toastCtrl.create({
          //   message: response.errors[0].message,
          //   showCloseButton: true
          // }).present();
    //     }
    //    })
    //  }






      // /wp-json/wc/v3/customers

    //   let customerData = {
    //     customer : {}
    // }
    let customerData = {
        email: this.email,
        first_name: this.userName,
        last_name: this.userName,
        username: this.userName,
        password: this.password,
        billing: {
          first_name: this.userName,
          last_name: this.userName,
          company: "honeebi",
          address_1: this.address1,
          address_2: this.address2,
          city: this.landmark,
          state: "TS",
          postcode: this.pincode,
          country: "IND",
          email: this.email,
          phone: "(555) 555-5555"
        },
        shipping: {
          first_name: this.userName,
          last_name: this.userName,
          company: "honeebi",
          address_1: this.address1,
          address_2: this.address2,
          city: this.landmark,
          state: "TS",
          postcode: this.pincode,
          country: "IND"
        }
      };

      this.WooCommerce.postAsync("customers",customerData).then((data) => {
      
        this.zone.run(() => {
          console.log("Customer data",JSON.parse(data.body))
          // this.products_category = JSON.parse(data.body);
      });
  
        // console.log("list of products",this.products_category);
        // this.loader.loadingDismiss()
       
        }, (err) => {
        console.log(err);
        })
        this.router.navigate(['./tabnav/explore']);
    //   const header = new HttpHeaders({
    //     'Content-Type': 'application/x-www-form-urlencoded'
    //   });
    //    const  url = 'http://honeebi.com';
    //  const consumerKey = 'ck_2362fa85a43bd64963b3b3f452cb739e0771d997';
    // const consumerSecret = 'cs_16a4365958209ad544b7292ba2011f0255530f78';
    //   const data = `username=${this.userName}&email=${this.email}&password=${this.password}`;
    //   return new Promise(resolve => {
    //     this.http
    //       .post(
    //         `${url}/wp-json/wc/v3/customers?consumer_key=${
    //           consumerKey
    //         }&consumer_secret=${consumerSecret}`,
    //         data,
    //         { headers: header }
    //       )
    //       .subscribe(customerData => {
    //         console.log("customer response",customerData);
    //         resolve(customerData);
    //       });
    //   });
    //   this.WooCommerce.postAsync('customers',customerData).then((data) =>{
    //     console.log(JSON.parse(data.body));
    // });
  //  this.router.navigate(['./tabnav/explore']);
      // url: "http://honeebi.com",
      // consumerKey: "ck_2362fa85a43bd64963b3b3f452cb739e0771d997",
      // consumerSecret: "cs_16a4365958209ad544b7292ba2011f0255530f78",
      // wpAPI: true,
      // version: 'wc/v1'
      

      // const httpOptions = {
      //   headers: new HttpHeaders({
      //      'Content-Type': 'application/json'
      //   })
      // }

      // this.http.post("http://honeebi.com/wp-json/wc/v3/customers?consumer_key=ck_2362fa85a43bd64963b3b3f452cb739e0771d997&consumer_secret=cs_16a4365958209ad544b7292ba2011f0255530f78", customerData,httpOptions)
      // .subscribe(
      //   async data => {
      //     console.log("Order successfully created", data);
      //   },
      //   async error => {
      //     console.log("Error", error);
      //   }
      // );
      // this.router.navigate(['./tabnav/explore']);
      // this.WooCommerce.post("customers", data)
      // .then((response) => {
      //   console.log(response.data);
      //   this.router.navigate(['./tabnav/explore']);
      // })
      // .catch((error) => {
      //   console.log(error.response.data);
      // });
      }
      
}  

