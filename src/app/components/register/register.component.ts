import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {PasswordValidator} from '../../validations/password.validator';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
registrationForm: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  this.registrationForm = this.fb.group({
    firstName: ['', [Validators.required]],
    lastName: ['', [Validators.required]],
    email: ['', [Validators.required]],
    userName: ['', [Validators.required]],
    password: [''],
    confirmPassword: ['']
  },{validator: PasswordValidator});
  }
  get firstName() {
    return this.registrationForm.get('firstName');
  }
  get lastName() {
    return this.registrationForm.get('lastName');
  }
  get email() {
    return this.registrationForm.get('email');
  }
  get userName() {
    return this.registrationForm.get('userName');
  }
  onNext() { }
  onRegister() { }
}
