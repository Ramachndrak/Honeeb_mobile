import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-addnew-address',
  templateUrl: './addnew-address.page.html',
  styleUrls: ['./addnew-address.page.scss'],
})
export class AddnewAddressPage implements OnInit {
  validateForm: FormGroup;
  isValid: boolean = false;
  userName: string = '';
  address1: string = '';
  address2: string = '';
  pincode: string = '';
  landmark: string = '';
  constructor(private router:Router,private _fb: FormBuilder,) {
    this.validateForm = this._fb.group({
      userName: new FormControl('', [Validators.required, Validators.pattern(''),Validators.minLength(3), Validators.maxLength(20)]),
      address1: new FormControl('', [Validators.required, Validators.pattern(''), Validators.minLength(8), Validators.maxLength(15)]),
      address2: new FormControl('', [Validators.required, Validators.pattern(''), Validators.minLength(8), Validators.maxLength(15)]),
      pincode: new FormControl('', [Validators.required, Validators.pattern(''), Validators.minLength(8), Validators.maxLength(15)]),
      landmark: new FormControl('', [Validators.required, Validators.pattern(''), Validators.minLength(8), Validators.maxLength(15)]),
  });

   }

  ngOnInit() {
  }
  autoDetectAddress()
  {
    this.router.navigate(["./auto-detect-address",{"categories_all":""}]) 
  }
  onSubmit() {
   this.isValid = true;
   console.log(this.validateForm);
  }
}
