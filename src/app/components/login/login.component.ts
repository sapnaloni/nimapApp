import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { RegisterComponent } from '../register/register.component';


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
locationList:string[]=['Pune','Bangalore','Chennai','Mumbai','Satara','Solapur','Kolhapur','Nagpur'];
constructor(public dialog: MatDialog){ }
ngOnInit(){}
onChange(event: any){
  console.log(event.value);
}

openDialog(): void {
  const dialogRef = this.dialog.open(RegisterComponent, {
    width: '600px'
  });

  dialogRef.afterClosed().subscribe(result => {
    console.log('The dialog was closed');
  });
}

}
