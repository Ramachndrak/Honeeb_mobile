import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  doitlaterTapped()
  {
    localStorage.setItem('isLoggedIn', 'false');
    this.router.navigate(['./tabnav/explore']);
  }
  signupWithno()
  {
    this.router.navigate(['./signupwithmobileno']);
  }
  login()
  {
    this.router.navigate(['./login']);
  }

}
