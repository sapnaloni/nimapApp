import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent
{
  loginForm=new FormGroup({
    email:new FormControl('',Validators.compose([Validators.required,Validators.email])),
    password:new FormControl('',Validators.compose([Validators.required,Validators.minLength(6),Validators.maxLength(10)])),
  })
formSubmitted=false
proceedLogin()
{
  this.formSubmitted=true

  if(this.loginForm.valid)
  {
    alert("Login successfull")
  }
}
}
