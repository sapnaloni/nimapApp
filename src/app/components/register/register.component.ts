import { Component, Inject } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { RegisterService } from 'src/app/services/register.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  textToShow="Upload your photo"
  formSubmitted = false

  constructor(
    private formBuilder: FormBuilder,
    private registerService: RegisterService,
    public dialogRef: MatDialogRef<RegisterComponent>) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  registrationForm = this.formBuilder.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    email: ['', Validators.required],
    mobileNumber: ['', Validators.required],
    hobbies: [''],
    addressType: [''],
    homeAddress: [''],
    companyAddress: ['']
  })
  proceedRegistration() {
    this.formSubmitted = true
    if(this.registrationForm.valid)
    {
      console.log(this.registrationForm.value);
      alert("Registration successfull");
    }
  }
  myValidation():ValidatorFn
  {
    return(control:AbstractControl):{[key:string]:any} |  null=>
    {
      const value=control.value;
      if(value && value.charAt(0)!==value.charAt(0).toUpperCase())
      {
        return{
          'startsWithUppercase':true
        };
      }
      return null;
    }
  }
  onSliderChange(value:number): void {
    // Handle the slider value change here
    console.log('Slider value changed:',value);
    // You can perform any other actions based on the value

  }

  stateList:string[]=['Karnataka','Maharashtra','Tamilnadu','AndraPadesh','kerala','delhi','Odissa','MadyaPadesh'];


  countryList:string[]=['India','USA','Pakistan','England','Dubai','Indonesia','Brazil','Germany'];

  addressList:string[]=[];

  homeList:string[]=['Home Address1','Home Address2'];

  companyList:string[]=['Company Address1','Company Address2'];
  ngOnInit(){}
  onChange(event: any){
    console.log(event.value);
  }



}
