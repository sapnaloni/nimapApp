import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { RegisterService } from 'src/app/services/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  // public userInfo:any;
  // formSubmitted = false
  // registers: any[] = [];

  //registrationForm:FormGroup;
 userData = {
 profileImage:[''],
 firstName: ['', [Validators.required, Validators.pattern('^[a-zA-Z ]*$'),Validators.maxLength(20)]],
 lastName: ['', Validators.required],
 email: ['', Validators.required],
 mobileNumber: ['', Validators.required],
 hobbies: [''],
 addressType: [''],
 homeAddress: [''],
 companyAddress: ['']
 };
  constructor(
    private formBuilder: FormBuilder,
    private registerService: RegisterService,
    public dialogRef: MatDialogRef<RegisterComponent>,
    private http: HttpClient
    ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  registrationForm = this.formBuilder.group({
    profileImage:[''],
    firstName: ['', [Validators.required, Validators.pattern('^[a-zA-Z ]*$'),Validators.maxLength(20)]],
    lastName: ['', Validators.required],
    email: ['', Validators.required],
    mobileNumber: ['', Validators.required],
    hobbies: [''],
    addressType: [''],
    homeAddress: [''],
    companyAddress: ['']
  })
  // proceedRegistration() {
  //   this.formSubmitted = true
  //   if(this.registrationForm.valid)
  //   {
  //     console.log(this.registrationForm.value);
  //     alert("Registration  successfull");
  //   }
  // }

  onSubmit(): void{
    this.registerService.registerUser(this.userData).subscribe(
      response => {
        console.log('Registration successful:',response);
      },
      error => {
        console.error('Registration failed:',error);
      }
    );
    }


  onSliderChange(value:number): void {
    // Handle the slider value change here
    console.log('Slider value changed:',value);


  }

  stateList:string[]=['Karnataka','Maharashtra','Tamilnadu','AndraPadesh','kerala','delhi','Odissa','MadyaPadesh'];


  countryList:string[]=['India','USA','Pakistan','England','Dubai','Indonesia','Brazil','Germany'];

  addressList:string[]=['Home','company'];
  homeList={
    Home:['Home address 1','Home address2'],
  }
  companyList={
    Company:['company address 1','company address2'],
  };
  ngOnInit(){}
  onChange(event: any){
     console.log(event.value);
  }

  }
