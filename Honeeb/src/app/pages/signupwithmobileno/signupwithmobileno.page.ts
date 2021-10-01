import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'app-signupwithmobileno',
  templateUrl: './signupwithmobileno.page.html',
  styleUrls: ['./signupwithmobileno.page.scss'],
})
export class SignupwithmobilenoPage implements OnInit {

  mobileNO = ""
  isSignup = false
 
  constructor(private router:Router) { }
  
  ngOnInit() {
  }
  signupWithno()
  {
  this.isSignup = true
  this.router.navigate(['./otpverification']);
  }
  verified()
  {
  this.router.navigate(['./otpverification']);
  }
}  

