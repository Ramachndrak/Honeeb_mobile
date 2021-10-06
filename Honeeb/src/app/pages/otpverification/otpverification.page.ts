import { Component, NgZone, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {Platform} from '@ionic/angular';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { LoadingControllerProvider } from 'src/loading-controller/loading-controller';
import { WoocommerceProvider } from 'src/providers/woocommerce/woocommerce';
import { UtilsProvider } from 'src/utils/utils';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LaunchNavigator, LaunchNavigatorOptions } from '@ionic-native/launch-navigator/ngx';
import { NativeGeocoder, NativeGeocoderOptions, NativeGeocoderResult } from '@ionic-native/native-geocoder/ngx';
declare var google;
@Component({
  selector: 'app-otpverification',
  templateUrl: './otpverification.page.html',
  styleUrls: ['./otpverification.page.scss'],
})
export class OtpverificationPage implements OnInit {
  map : any;
  marker : any;
  latitude : any = "";
  longitude : any = "";
  timestap : any = "";
  pageTitle: string;
  latLngBounds: any;
  infowindow: any;
  facilitieDetails: any;
  latitude_details: any;
  latitudeforopenGmap:number ;
  longitudeforopenGmap:number ;
  location = {
    'latitude': 0,
    'longitude': 0,
    'address': '',
    'displayAddress': '',
  };
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
  state : string = '';
  validateForm: FormGroup;
  isValid: boolean = false;
  userCity: any;
  latLngResult: any;
  userLocationFromLatLng: NativeGeocoderResult;
  userLocation: any;
  lat: string;
  lng: string;
  isGetLocation : boolean = false;
  constructor(public platform : Platform,public geolocation: Geolocation,private launchNavigator: LaunchNavigator,private router:Router,private _fb: FormBuilder,private WP: WoocommerceProvider, private utls: UtilsProvider,
    private loader: LoadingControllerProvider, private http: HttpClient,private nativeGeocoder: NativeGeocoder,
    private zone: NgZone) {
      this.WooCommerce = WP.init();
    //   this.platform.ready().then(()=>{
    //     var mapoptions = {
    //       center:{},
    //       zoom :7
    //     }
    //     this.map = new google.maps.Map(document.getElementById("map"),mapoptions)
    //   })
    //   this.geolocation.getCurrentPosition().then(position =>{
    //     this.latitudeforopenGmap = position.coords.latitude;
    //     this.longitudeforopenGmap = position.coords.longitude;
    //     console.log(position)
    //     console.log('lat',position.coords.latitude)
    //     console.log('long',position.coords.longitude)
    // },error=>{
    //     console.log('error',error);
    // });
      //  this.initializeApp()
       
    this.validateForm = this._fb.group({
      userName: new FormControl('', [Validators.required, Validators.pattern(''),Validators.minLength(3), Validators.maxLength(20)]),
      email: new FormControl('', [Validators.required, Validators.pattern(''),]),
      password: new FormControl('', [Validators.required, Validators.pattern('')]),
      mobile: new FormControl('', [Validators.required, Validators.pattern(''), Validators.minLength(8), Validators.maxLength(15)]),
      address1: new FormControl('', [Validators.required, Validators.pattern(''), Validators.minLength(8), Validators.maxLength(15)]),
      address2: new FormControl('', [Validators.required, Validators.pattern(''), Validators.minLength(8), Validators.maxLength(15)]),
      pincode: new FormControl('', [Validators.required, Validators.pattern(''), Validators.minLength(8), Validators.maxLength(15)]),
      landmark: new FormControl('', [Validators.required, Validators.pattern(''), Validators.minLength(6), Validators.maxLength(6)]),
      state:new FormControl('', [Validators.required, Validators.pattern(''), Validators.minLength(8), Validators.maxLength(15)]),
  });
  }
  ngOnInit() {
  }

  navigateLocation() {
    this.platform.ready().then(() => {
      this.getUserLocation();
    });
  }
  getUserLocation() {
    this.loader.showLoading('get your location')
    this.geolocation.getCurrentPosition().then((resp) => {
      // this.getGeoLocation(resp.coords.latitude, resp.coords.longitude)
      if (this.platform.is('cordova')) {
        let options: NativeGeocoderOptions = {
          useLocale: true,
          maxResults: 5
        };
        this.nativeGeocoder.reverseGeocode(resp.coords.latitude, resp.coords.longitude, options)
          .then((result: any) => {
            console.log(result)
            this.loader.loadingDismiss()
            this.userLocation = result[0]
            this.isGetLocation = true
            this.pincode = this.userLocation.postalCode
            this.landmark = this.userLocation.locality
            this.state = this.userLocation.administrativeArea
            this.address1 = this.userLocation.thoroughfare+","+this.userLocation.areasOfInterest
            this.address2 = this.userLocation.subAdministrativeArea+","+this.userLocation.subLocality
            console.log(this.userLocation)
          })
          .catch((error: any) => console.log(error));
      } else {
        this.getGeoLocation(resp.coords.latitude, resp.coords.longitude)
      }
    }).catch((error) => {
    });
    // let watch = this.geolocation.watchPosition();
    // watch.subscribe((data) => {
    //   // data can be a set of coordinates, or an error (if an error occurred).
    //   // data.coords.latitude
    //   // data.coords.longitude
    //   let options: NativeGeocoderOptions = {
    //     useLocale: true,
    //     maxResults: 5
    //   };
    //   if (this.platform.is('cordova')) {
    //     let options: NativeGeocoderOptions = {
    //       useLocale: true,
    //       maxResults: 5
    //     };
    //     this.nativeGeocoder.reverseGeocode(data.coords.latitude, data.coords.longitude, options)
    //       .then((result: NativeGeocoderResult[]) => {
    //         console.log(result)
    //         this.userLocation = result[0]
    //         console.log(this.userLocation)
    //       })
    //       .catch((error: any) => console.log(error));
    //   } else {
    //     console.log('not cordove')
    //     this.getGeoLocation(data.coords.latitude, data.coords.longitude)
    //   }
    // });
  }
  async getGeoLocation(lat: number, lng: number, type?) {
    if (navigator.geolocation) {
      let geocoder = await new google.maps.Geocoder();
      let latlng = await new google.maps.LatLng(lat, lng);
      let request = { latLng: latlng };

      await geocoder.geocode(request, (results, status) => {
        if (status == google.maps.GeocoderStatus.OK) {
          let result = results[0];
          this.zone.run(() => {
            if (result != null) {
              this.userCity = result.formatted_address;
              if (type === 'reverseGeocode') {
                this.latLngResult = result.formatted_address;
              }
            }
          })
        }
      });
    }
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
          state: this.state,
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
          state: this.state,
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

